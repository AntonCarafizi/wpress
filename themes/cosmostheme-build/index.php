<?php
get_header();
page_banner(array(
    'title' => 'This is our Blog',
    'subtitle' => 'Check out our posts'
));
?>

    <div class="container container--narrow page-section">
        <?php
        while (have_posts()) {
            the_post(); ?>
            <div class="post-item">
                <h2 class="headline headline--medium headline--post-title"><a
                            href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                <div class="metabox">
                    <p>Posted by <?php the_author_posts_link(); ?> on <?php the_time('Y-m-d'); ?>
                        in <?php echo get_the_category_list(','); ?></p>
                </div>
                <div>
                    <?php the_excerpt(); ?>
                    <p><a class="btn btn--blue" href="<?php echo get_permalink(); ?>">Continue reading &raquo; </a></p>
                </div>
            </div>
        <?php }
        echo paginate_links();
        ?>
    </div>


<?php
get_footer();
?>