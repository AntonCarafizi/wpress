<?php get_header();
page_banner(); ?>


    <div class="full-width-split group">
        <div class="full-width-split__one">
            <div class="full-width-split__inner">
                <h2 class="headline headline--small-plus t-center">Upcoming Events</h2>

                <?php

                get_query_posts(array(
                    'posts_per_page' => 2,
                    'post_type' => 'event',
                    'meta_key' => 'event_date',
                    'orderby' => 'meta_value_num',
                    'order' => 'ASC',
                    'meta_query' => array(
                        array(
                            'key' => 'event_date',
                            'compare' => '>=',
                            'value' => date('Ymd'),
                            'type' => 'numeric'
                        )
                    )
                ));
                ?>

                <p class="t-center no-margin"><a href="<?php echo get_post_type_archive_link('event') ?>"
                                                 class="btn btn--blue">View All Events</a></p>

            </div>
        </div>
        <div class="full-width-split__two">
            <div class="full-width-split__inner">
                <h2 class="headline headline--small-plus t-center">From Our Blogs</h2>
                <?php
                get_query_posts(array(
                    'posts_per_page' => 2,
                    'post_type' => 'post'));
                ?>

                <p class="t-center no-margin"><a href="<?php echo site_url('/blog'); ?>" class="btn btn--yellow">View
                        All Blog Posts</a></p>
            </div>
        </div>
    </div>
    <div class="hero-slider">
        <?php get_query_posts(array(
            'post_type' => 'slide',
            'posts_per_page' => -1
        )); ?>
    </div>

<?php get_footer();

?>