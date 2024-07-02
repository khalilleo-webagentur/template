$(document).ready(function () {

    setTimeout(function () {
        $(".alert").alert('close').fadeOut();
    }, 10000);

    if ($('#clipboard').length) {
        $('#clipboard').on('click', function (e) {
            let link = $('#link').text();
            copyContent(link);
            swal('', 'Link (' + link + ') is copied to clipboard.', 'success');
        });
    }

    if ($('.three-dots').length) {
        $('.three-dots').on('click', function () {
            $('.dataId').val($(this).attr('data-id'));
        });
    }

     let modal = $('.modal');
     modal.on('shown.bs.modal', function () {
         $(this).find('[autofocus]').focus();
     });
});

function isLocalStorageAvailable() { return typeof (Storage) !== "undefined" }

async function copyContent(text) {
    try {
        if (isLocalStorageAvailable) {
            await navigator.clipboard.writeText(text);
        }
    } catch (err) {
        swal('', 'clipboard is not avialble on your Browser.', 'warning');
    }
}
