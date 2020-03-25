<?php
get_header();
?>

    <div class="page-banner">
        <div class="page-banner__bg-image"
             style="background-image: url(<?php echo get_theme_file_uri('/images/ocean.jpg') ?>);"></div>
        <div class="page-banner__content container container--narrow">
            <h1 class="page-banner__title">Past Events</h1>
            <div class="page-banner__intro">
                <p>Recap of our past events.</p>
            </div>
        </div>
    </div>

    <div class="container container--narrow page-section">
        <?php

        $past_events = get_query_posts(array(
            'paged' => get_query_var('paged', 1),
            'posts_per_page' => 1,
            'post_type' => 'event',
            'meta_key' => 'event_date',
            'orderby' => 'meta_value_num',
            'order' => 'ASC',
            'meta_query' => array(
                'key' => 'event_date',
                'compare' => '<',
                'value' => date('Ymd'),
                'type' => 'numeric'
            )
        ));
        echo paginate_links(array(
            'total' => $past_events->max_num_pages
        ));
        ?>
    </div>


<?php
get_footer();
?>