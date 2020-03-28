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
                    water: $('#water').is(':checked'),
                    state: $('#state').val(),
                    business_city: $('#business_city').val(),
                    address: $('#address').val(),
                    phone: $('#business_contact_number').val(),
                    store: $('#business_name').val(),
                    meats: $('#meat').is(':checked'),
                    location: $('#business_city').val(),
                    timestamp: $('#timeS').val(),
                    toiletPaper: $('#toilet').is(':checked'),
                    faceMasks: $('#mask').is(':checked'),
                    cleaning: $('#cleaning').is(':checked'),
                    chicken: $('#chicken').is(':checked'),
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