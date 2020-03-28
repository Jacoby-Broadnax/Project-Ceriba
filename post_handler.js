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
                    state: $('#state').val(),
                    business_city: $('#business_city').val(),
                    address: $('#address').val(),
                    phone: $('#business_contact_number').val(),
                    store: $('#business_name').val(),
                    meats: $('#meat').val(),
                    city: $('#business_city').val(),
                    water: $('#water').val(),
                    water: $('#water').val(),
                    water: $('#water').val(),
                    water: $('#water').val(),
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