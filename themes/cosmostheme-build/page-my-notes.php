<?php
if (!is_user_logged_in()) {
    wp_redirect(esc_url(site_url('/')));
    exit();
}
get_header();
page_banner();
while (have_posts()) {
    the_post();
    ?>

    <div class="container container--narrow page-section">
        <div class="create-note">
            <h2 class="headline headline--medium">Create new Note</h2>
            <input class="new-note-title" placeholder="Title">
            <textarea class="new-note-body" placeholder="Your note here..."></textarea>
            <span class="submit-note">Create Note</span>
            <span class="note-limit-message"></span>
        </div>
        <ul class="min-list link-list" id="my-notes">
            <?php
            get_query_posts(array(
                'post_type' => 'note',
                'post_per_page' => -1,
                'author' => get_current_user_id()
            )); ?>
        </ul>
    </div>


<?php }
get_footer();
?>
