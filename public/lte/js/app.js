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

// blur images
window.addEventListener('load', function() {
    const image = document.querySelector('img');
    if (image) {
        image.style.filter = 'blur(0)';
    }
});