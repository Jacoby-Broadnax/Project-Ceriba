$(document).ready(function () {
    $('#post').submit(function (e) {
        e.preventDefault();
        let form = $(this);
        $.ajax({
            type: 'post',
            dataType: 'json',
            url: form.attr('action'),
            data: {
                ceriba: {
                    water: $('#water').val(),
                    link: $('#link').val(),
                    imageUrl: $('#imageUrl').val(),
                    description: $('#description').val(),
                }
            },
            success: function () {
                $('#success').show();
            },
            error: function (xhr, res, text) {
console.log("An Error Occurred")
            }
        });
    });
});