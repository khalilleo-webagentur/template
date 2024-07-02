$(document).ready(function () {

    setTimeout(function () {
        $(".alert").alert('close').fadeOut();
    }, 6000);

    let selector = $('.selector');

    if (selector.length) {
        selector.on('click', function (e) {
            e.preventDefault();
            $('.ID').val($(this).attr('data-id'));
        });
    }
});