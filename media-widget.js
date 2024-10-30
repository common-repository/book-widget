jQuery(document).ready(function ($) {

    $(document).on("click", ".upload_image_button", function (e) {
        e.preventDefault();
        var $button = $(this);

        // Create media frame
        var file_frame = wp.media.frames.file_frame = wp.media({
            title: 'Select or upload image',
            library: {
                type: 'image'
            },
            button: {
                text: 'Select'
            },
            multiple: false
        });

        // Run callback when image is selected
        file_frame.on('select', function () {
            var attachment = file_frame.state().get('selection').first().toJSON();

            $button.siblings('input').val(attachment.url);
            $button.siblings('img').attr('src', attachment.url);
        });

        file_frame.open();
    });
});
