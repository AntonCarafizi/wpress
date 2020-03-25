<?php
require get_theme_file_path('/inc/search-route.php');
require get_theme_file_path('/inc/like-route.php');

function assets()
{
    wp_enqueue_style('cosmostheme-stylesheet', get_template_directory_uri() . '/dist/css/bundle.css', array(), '1.0.0', 'all');
    wp_enqueue_script('cosmostheme-scripts', get_template_directory_uri() . '/dist/js/bundle.js', array('jquery'), '1.0.0', true);
}

function custom_rest()
{
    register_rest_field('post', 'authorName', array(
        'get_callback' => function () {
            return get_the_author();
        }
    ));
    register_rest_field('note', 'userNoteCount', array(
        'get_callback' => function () {
            return count_user_posts(get_current_user_id(), 'note');
        }
    ));
}

function page_banner($args = array())
{
    if (!isset($args['title'])) {
        $args['title'] = get_the_title();
    }
    if (!isset($args['subtitle'])) {
        $args['subtitle'] = get_field('page_banner_subtitle');
    }
    if (!isset($args['photo'])) {
        if (get_field('page_banner_background_image')) {
            $args['photo'] = get_field('page_banner_background_image')['sizes']['pageBanner'];
        } else {
            $args['photo'] = get_theme_file_uri('/images/ocean.jpg');
        }
    }

    include(locate_template('template-parts/content-banner.php'));

}

function get_event($event_date)
{
    $date_string = $event_date;
    $date = DateTime::createFromFormat('d/m/Y', $date_string);
    include locate_template('template-parts/content-event.php');
}

function get_query_posts($args = array())
{

    $query = new WP_Query($args);

    if ($query->have_posts()) {

        if ($query->found_posts > 1 AND $args['post_type'] != 'slide') {
            echo '<ul>';
        }
        while ($query->have_posts()) {
            $query->the_post();
            if ($args['post_type'] == 'post' && is_front_page()) {
                include locate_template('template-parts/front-post.php');
            } else if ($args['post_type'] == 'event') {
                get_event(get_field('event_date'));
            } else if ($args['post_type'] == 'like') {
                continue;
            } else {
                include locate_template('template-parts/content-' . $args['post_type'] . '.php');
            }
        }
        if ($query->found_posts > 1 AND $args['post_type'] != 'slide') {
            echo '</ul>';
        }
        wp_reset_postdata();
    }
    return $query;
}

function files()
{
    //wp_enqueue_script('main-cosmostheme-js', get_theme_file_uri('/js/scripts.js'), NULL, microtime(), true);
    wp_enqueue_style('custom-google-fonts', 'https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i|Roboto:100,300,400,400i,700,700i');
    wp_enqueue_style('font-awesome', 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
    wp_enqueue_style('main_styles', get_stylesheet_uri(), NULL, microtime());
    wp_localize_script('cosmostheme-scripts', 'data', ['root_url' => get_site_url(), 'nonce' => wp_create_nonce('wp_rest')]);
}


function features()
{
    register_nav_menu('headerMenuLocation', 'Header Menu Location');
    register_nav_menu('footerMenuLocationOne', 'Footer Menu Location One');
    register_nav_menu('footerMenuLocationTwo', 'Footer Menu Location Two');
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_image_size('professorLandscape', '300', '200', true);
    add_image_size('professorPortrait', '250', '400', true);
    add_image_size('pageBanner', '1500', '300', true);
}


function adjust_queries($query)
{
    if (!is_admin() AND is_post_type_archive('program') AND $query->is_main_query()) {
        $query->set('orderby', 'title');
        $query->set('order', 'ASC');
        $query->set('post_per_page', -1);
    }
    if (!is_admin() AND is_post_type_archive('event') AND $query->is_main_query()) {
        $today = date('Ymd');
        $query->set('meta_key', 'event_date');
        $query->set('orderby', 'meta_value_num');
        $query->set('order', 'ASC');
        $query->set('meta_query', [
            'key' => 'event_date',
            'compare' => '>=',
            'value' => $today,
            'type' => 'numeric'
        ]);
    }
}

function redirect_subs_to_frontend()
{
    $current_user = wp_get_current_user();
    if (count($current_user->roles) == 1 AND $current_user->roles[0] == 'subscriber') {
        wp_redirect(site_url('/'));
        exit;
    }
}

function no_subs_admin_bar()
{
    $current_user = wp_get_current_user();
    if (count($current_user->roles) == 1 AND $current_user->roles[0] == 'subscriber') {
        show_admin_bar(false);
    }
}

function our_header_url()
{
    return esc_url(site_url('/'));
}

function our_login_css()
{
    wp_enqueue_style('main_styles', get_stylesheet_uri(), NULL, microtime());
    wp_enqueue_style('custom-google-fonts', 'https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i|Roboto:100,300,400,400i,700,700i');
}

function our_login_title()
{
    return get_bloginfo('name');
}

function make_note_private($data, $postarr, $limit = 5)
{
    if ($data['post_type'] == 'note') {
        if (count_user_posts(get_current_user_id(), 'note') >= $limit AND !$postarr['ID']) {
            die("You have reached your note limit.");
        }
        $data['post_content'] = sanitize_textarea_field($data['post_content']);
        $data['post_title'] = sanitize_text_field($data['post_title']);
    }
    if ($data['post_type'] == 'note' AND $data['post_status'] != 'trash') {
        $data['post_status'] = "private";
    }

    return $data;
}

add_action('wp_enqueue_scripts', 'assets');
add_action('rest_api_init', 'custom_rest');
add_action('wp_enqueue_scripts', 'files');
add_action('after_setup_theme', 'features');
add_action('pre_get_posts', 'adjust_queries');
//redirect subdcriber accounts out of admin and onto homepage
add_action('admin_init', 'redirect_subs_to_frontend');
add_action('wp_loaded', 'no_subs_admin_bar');
// customize login screen
add_filter('login_headerurl', 'our_header_url');
add_action('login_enqueue_scripts', 'our_login_css');
add_filter('login_headertext', 'our_login_title');
add_filter('wp_insert_post_data', 'make_note_private', 10, 2);
