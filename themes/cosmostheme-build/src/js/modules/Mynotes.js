import $ from 'jquery';

class Mynotes {
    constructor() {
        this.events();
    }

    events() {
        $(document).on("click", ".delete-note", this.deleteNote.bind(this));
        $(document).on("click", ".edit-note", this.editNote.bind(this));
        $(document).on("click", ".update-note", this.updateNote.bind(this));
        $(document).on("click", ".submit-note", this.createNote.bind(this));
    }

    deleteNote(e) {
        var thisNote = $(e.target).parents("li");
        $.ajax({
            beforeSend: (xhr) => {
                xhr.setRequestHeader('X-WP-Nonce', data.nonce);
            },
            url: data.root_url + '/wp-json/wp/v2/note/' + thisNote.data('id'),
            type: 'DELETE',
            success: (response) => {
                thisNote.slideUp();
                if (response.userNoteCount < 6) {
                    $(".note-limit-message").removeClass('active');
                }
            },
            error: (response) => {
                console.log(response);
                $(".note-limit-message").addClass("active").html(response.responseJSON.message);
            }
        });
    }

    updateNote(e) {
        var thisNote = $(e.target).parents("li");
        var ourUpdatedPost = {
            title: thisNote.find(".note-title-field").val(),
            content: thisNote.find(".note-body-field").val()
        };
        $.ajax({
            beforeSend: (xhr) => {
                xhr.setRequestHeader('X-WP-Nonce', data.nonce);
            },
            url: data.root_url + '/wp-json/wp/v2/note/' + thisNote.data('id'),
            type: 'POST',
            data: ourUpdatedPost,
            success: (response) => {
                console.log(response);
                this.makeNoteReadonly(thisNote);
            },
            error: (response) => {
                console.log(response);
                $(".note-limit-message").addClass("active").html(response.responseJSON.message);
            }
        });
    }

    createNote(e) {
        var ourNewPost = {
            title: $('.new-note-title').val(),
            content: $('.new-note-body').val(),
            status: 'publish'
        };
        $.ajax({
            beforeSend: (xhr) => {
                xhr.setRequestHeader('X-WP-Nonce', data.nonce);
            },
            url: data.root_url + '/wp-json/wp/v2/note/',
            type: 'POST',
            data: ourNewPost,
            success: (response) => {
                $(".note-limit-message").removeClass("active").html('');
                $(".new-note-title, .new-note-body").val('');
                $(`
                <li data-id="${response.id}">
                    <input readonly class="note-title-field" value="${response.title.raw}">
                    <span class="edit-note"><i class="fa fa-pencil" aria-hidden="true"></i>Edit</span>
                    <span class="delete-note"><i class="fa fa-trash-o" aria-hidden="true"></i>Delete</span>
                    <textarea readonly class="note-body-field">${response.content.raw}</textarea>
                    <span class="update-note btn btn--blue btn--small"><i class="fa fa-arrow-right" aria-hidden="true"></i> Save</span>
                </li>
                `).prependTo("#my-notes").hide().slideDown();
            },
            error: (response) => {
                console.log(response);
                if (response.responseText == "You have reached your note limit.") {
                    $(".note-limit-message").addClass("active").html(response.responseText + " Delete an existing note to make room for a new one.");
                } else {
                    $(".note-limit-message").addClass("active").html(response.responseJSON.message);
                }
            }
        });
    }


    makeNoteEditable(thisNote) {
        thisNote.find(".edit-note").html('<i class="fa fa-times" aria-hidden="true"></i> Cancel');
        thisNote.find(".note-title-field, .note-body-field").removeAttr("readonly").addClass("note-active-field");
        thisNote.find(".update-note").addClass("update-note--visible");
        thisNote.data("state", "editable");
    }

    makeNoteReadonly(thisNote) {
        thisNote.find(".edit-note").html('<i class="fa fa-pencil" aria-hidden="true"></i> Edit');
        thisNote.find(".note-title-field, .note-body-field").attr("readonly", "readonly").removeClass("note-active-field");
        thisNote.find(".update-note").removeClass("update-note--visible");
        thisNote.data("state", "cancel");
    }

    editNote(e) {
        var thisNote = $(e.target).parents("li");

        if (thisNote.data("state") == 'editable') {
            this.makeNoteReadonly(thisNote);
        } else {
            this.makeNoteEditable(thisNote);
        }
    }
}

export default Mynotes;