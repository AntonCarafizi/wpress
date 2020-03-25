<?php
function cosmostheme_post_types(){
	// Event Post Type
	register_post_type('event', array(
		'capability_type' => 'event',
		'map_meta_cap' => true,
		'supports' => array('title', 'editor', 'excerpt'),
		'rewrite' => array('slug' => 'events'),
		'has_archive' => true,
		'public' => true,
		'labels' => array(
			'name' => 'Events',
			'add_new_item'  => 'Add new Event',
			'edit_item'     => 'Edit Event',
			'all_items'     => 'All Events',
			'singular_name' => 'Event'
		),
		'menu_icon' => 'dashicons-calendar'
	));
	// Program Post Type
	register_post_type('program', array(
		'capability_type' => 'program',
		'map_meta_cap' => true,
		'supports' => array('title', 'excerpt'),
		'rewrite' => array('slug' => 'programs'),
		'has_archive' => true,
		'public' => true,
		'labels' => array(
			'name' => 'Programs',
			'add_new_item'  => 'Add new Program',
			'edit_item'     => 'Edit Program',
			'all_items'     => 'All Programs',
			'singular_name' => 'Program'
		),
		'menu_icon' => 'dashicons-awards'
	));

	// Professor Post Type
	register_post_type('professor', array(
		'show_in_rest' => true,
		'supports' => array('title', 'editor', 'excerpt', 'thumbnail'),
		'public' => true,
		'labels' => array(
			'name' => 'Professors',
			'add_new_item'  => 'Add new Professor',
			'edit_item'     => 'Edit Professor',
			'all_items'     => 'All Professors',
			'singular_name' => 'Professor'
		),
		'menu_icon' => 'dashicons-welcome-learn-more'
	));

	// Notes Post Type
	register_post_type('note', array(
		'capability_type' => 'note',
		'map_meta_cap' => true,
		'show_in_rest' => true,
		'supports' => array('title', 'editor', 'excerpt'),
		'public' => false,
		'show_ui' => true,
		'labels' => array(
			'name' => 'Notes',
			'add_new_item'  => 'Add new Note',
			'edit_item'     => 'Edit Note',
			'all_items'     => 'All Notes',
			'singular_name' => 'Note'
		),
		'menu_icon' => 'dashicons-welcome-write-blog'
	));
	// Like Post Type
	register_post_type('like', array(
		'show_in_rest' => true,
		'supports' => array('title'),
		'public' => false,
        'show_ui' => true,
        'labels' => array(
            'name' => 'Likes',
            'add_new_item' => 'Add new Like',
            'edit_item' => 'Edit Like',
            'all_items' => 'All Likes',
            'singular_name' => 'Like'
        ),
        'menu_icon' => 'dashicons-heart'
    ));

    // Slide Post Type
    register_post_type('slide', array(
        'supports' => array('title'),
        'public' => true,
        'show_ui' => true,
        'labels' => array(
            'name' => 'Slides',
            'add_new_item' => 'Add new Slide',
            'edit_item' => 'Edit Slide',
            'all_items' => 'All Slides',
            'singular_name' => 'Slide'
        ),
        'menu_icon' => 'dashicons-images-alt'
    ));
}

add_action('init', 'cosmostheme_post_types');