<?php get_header();
page_banner();
while (have_posts()) {
    the_post();
    ?>

    <div class="container container--narrow page-section">
        <h2><?php the_title(); ?></h2>
        <div class="generic-content">
            <div class="row group">
                <div class="one-third">
                    <?php the_post_thumbnail('professorPortrait'); ?>
                </div>
                <div class="two-thirds">
                    <?php
                    if (is_user_logged_in()) {
                        $query = get_query_posts(array(
                            'author' => get_current_user_id(),
                            'post_type' => 'like',
                            'meta_query' => array(
                                array(
                                    'key' => 'liked_professor_id',
                                    'compare' => '=',
                                    'value' => get_the_ID()
                                )
                            )
                        ));

                        ?>
                        <span class="like-box" data-like="<?php echo $query->posts[0]->ID; ?>"
                              data-professor="<?php the_ID(); ?>"
                              data-exists="<?php if ($query->found_posts) { ?>yes<?php } else { ?>no<?php } ?>">
                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                        <i class="fa fa-heart" aria-hidden="true"></i>
                        <span class="like-count"><?php echo $query->found_posts; ?></span>
                    </span>
                    <?php }
                    the_content(); ?>
                </div>
            </div>
        </div>

        <?php $related_programs = get_field('related_programs');
        if ($related_programs) { ?>
            <hr class="section-break">
            <h2 class="headline headline--medium">Subject(s) Taught</h2>
            <ul class="link-list min-list">
                <?php foreach ($related_programs as $program) { ?>
                    <li><a href="<?php echo get_the_permalink($program); ?>"><?php echo get_the_title($program); ?></a>
                    </li>
                <?php } ?>
            </ul>
        <?php } ?>
    </div>
<?php } ?>

<?php get_footer(); ?>