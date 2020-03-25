<?php get_header();
page_banner();
while (have_posts()) {
    the_post();
    ?>
    <div class="container container--narrow page-section">
        <div class="metabox metabox--position-up metabox--with-home-link">
            <p><a class="metabox__blog-home-link" href="<?php echo site_url('/blog'); ?>"><i class="fa fa-home"
                                                                                             aria-hidden="true">
                    </i> Blog Home </a>
                <span class="metabox__main">Posted by <?php the_author_posts_link(); ?> on <a
                            href="<?php site_url(); ?>/<?php the_time('Y'); ?>/<?php the_time('m'); ?>/<?php the_time('d'); ?>"><?php the_time('Y-m-d'); ?></a> in <?php echo get_the_category_list(','); ?></span>
            </p>
        </div>

        <h2><?php the_title(); ?></h2>
        <div class="generic-content">
            <?php the_content(); ?>
        </div>
    </div>
<?php } ?>

<?php get_footer(); ?>