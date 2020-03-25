<li data-id="<?php the_ID(); ?>">
    <input readonly class="note-title-field"
           value="<?php echo str_replace('Private: ', '', esc_attr(get_the_title())); ?>">
    <span class="edit-note"><i class="fa fa-pencil" aria-hidden="true"></i>Edit</span>
    <span class="delete-note"><i class="fa fa-trash-o" aria-hidden="true"></i>Delete</span>
    <textarea readonly class="note-body-field"><?php echo esc_textarea(get_the_content()); ?></textarea>
    <span class="update-note btn btn--blue btn--small"><i class="fa fa-arrow-right" aria-hidden="true"></i> Save</span>
</li>