<?php

add_action('rest_api_init', 'cosmosthemeRegisterSearch');

function cosmosthemeRegisterSearch()
{
    register_rest_route('cosmostheme', 'search', array(
        'methods' => WP_REST_Server::READABLE,
        'callback' => 'cosmosthemeSearchResults'
    ));
}

function cosmosthemeSearchResults($data)
{

    $mainQuery = new WP_Query(array(
        'post_type' => array('post', 'page', 'event', 'program', 'professor'),
        's' => sanitize_text_field($data['term'])
    ));

    $results = array(
        'generalInfo' => array(),
        'professors' => array(),
        'programs' => array(),
        'events' => array()
    );

    while ($mainQuery->have_posts()) {
        $mainQuery->the_post();

        switch (get_post_type()) {
            case 'post':
                array_push($results['generalInfo'], array(
                    'title' => get_the_title(),
                    'permalink' => get_the_permalink(),
                    'post_type' => get_post_type(),
                    'author_name' => get_the_author()
                ));
                break;
            case 'page':
                array_push($results['generalInfo'], array(
                    'title' => get_the_title(),
                    'permalink' => get_the_permalink(),
                    'post_type' => get_post_type(),
                    'author_name' => get_the_author()
                ));
                break;
            case 'professor':
                array_push($results['professors'], array(
                    'title' => get_the_title(),
                    'permalink' => get_the_permalink(),
                    'image' => get_the_post_thumbnail_url(0, 'professorLandscape')
                ));
                break;
            case 'event':
                $date_string = get_field('event_date');
                $date = DateTime::createFromFormat('d/m/Y', $date_string);
                $description = (has_excerpt()) ? get_the_excerpt() : wp_trim_words(get_the_content(), 18);
                array_push($results['events'], array(
                    'title' => get_the_title(),
                    'permalink' => get_the_permalink(),
                    'month' => $date->format('M'),
                    'day' => $date->format('d'),
                    'description' => $description
                ));
                break;
            case 'program':
                array_push($results['programs'], array(
                    'id' => get_the_ID(),
                    'title' => get_the_title(),
                    'permalink' => get_the_permalink(),
                    'post_type' => get_post_type(),
                    'author_name' => get_the_author()
                ));
        }
    }

    if ($results['programs']) {
        $programsMetaQuery = array('relation' => 'OR');

        foreach ($results['programs'] as $item) {
            array_push($programsMetaQuery, array(
                'key' => 'related_programs',
                'compare' => 'LIKE',
                'value' => '"' . $item['id'] . '"'
            ));
        }

        $programRelationshipQuery = new WP_Query(array(
            'post_type' => array('professor', 'event'),
            'meta_query' => $programsMetaQuery
        ));

        while ($programRelationshipQuery->have_posts()) {
            $programRelationshipQuery->the_post();

            if (get_post_type() == 'event') {
                $date_string = get_field('event_date');
                $date = DateTime::createFromFormat('d/m/Y', $date_string);
                $description = (has_excerpt()) ? get_the_excerpt() : wp_trim_words(get_the_content(), 18);
                array_push($results['events'], array(
                    'title' => get_the_title(),
                    'permalink' => get_the_permalink(),
                    'month' => $date->format('M'),
                    'day' => $date->format('d'),
                    'description' => $description
                ));
            }
            if (get_post_type() == 'professor') {
                array_push($results['professors'], array(
                    'title' => get_the_title(),
                    'permalink' => get_the_permalink(),
                    'image' => get_the_post_thumbnail_url(0, 'professorLandscape')
                ));
            }
        }

        $results['professors'] = array_values(array_unique($results['professors'], SORT_REGULAR));
        $results['events'] = array_values(array_unique($results['events'], SORT_REGULAR));

    }

    return $results;
}

?>