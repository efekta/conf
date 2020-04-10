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

    //MODAL
    $('.video-list-ico-users-list').on('click', function(event){
        event.preventDefault();
        $('.modal-wrapper').addClass('show-modal')
    })
    $('.modal-close').on('click', function(){
        $('.modal-wrapper').removeClass('show-modal')
    })
    $('.overlay').on('click', function(){
        $('.modal-wrapper').removeClass('show-modal')
    })
});