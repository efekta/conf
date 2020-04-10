$(document).ready(function () {
    $('.video-list-ico-chat').on('click', function(e) {
        e.preventDefault();
        $('.chat').addClass('open')
        $('.video-list').addClass('hide')
    });


    $('.overlay').on('click', function (e) {
        $('.chat').removeClass('open')
        $('.video-list').removeClass('hide')
    })
    //
    // $('.modal-toggle').on('click', function(e) {
    //     e.preventDefault();
    //     $('.modal').toggleClass('is-visible');
    // });

});