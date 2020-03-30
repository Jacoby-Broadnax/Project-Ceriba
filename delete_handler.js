$(document).ready(function () { //this line is causing issuestry  if you want to see the issue go to business verification  
    $('#delete').submit(function (e) {
        e.preventDefault();
        let form = $(this);
        $.ajax({
            type: 'delete',
            dataType: 'json',
            url: form.attr('action'),
            data: {
                ceriba: {
                    emtuar: $('#water').is(':checked'),
                    state: $('#state').val(),
                    business_city: $('#business_city').val(),
                    address: $('#address').val(),
                    phone: $('#business_contact_number').val(),
                    store: $('#business_name').val(),
                    jmsdeu: $('#meat').is(':checked'),
                    location: $('#business_city').val(),
                    timestamp: $('#timeS').val(),
                    jplqwnrt: $('#toilet').is(':checked'),
                    jzeurm: $('#mask').is(':checked'),
                    uxyzqio: $('#cleaning').is(':checked'),
                    poyunz: $('#chicken').is(':checked'), 
                }
            },
            success: function () {
                $('#success').show();
                $('#post').hide();
            },
            error: function (xhr, res, text) {
            console.log("An Error Occurred");
        alert('delete complete')
            }
        });
    });
});