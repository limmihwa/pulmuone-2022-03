$(function(){
    $('#gnb-toggle-btn').click(function(){
        $('#gnb').toggleClass('on');
    })


    //사이트 맵 close 
    $('#site-map-btn').click(function(){
        $('.sitemap-modal').addClass('on');
    });

    $('#sitemap-modal-close').click(function(){
        $('.sitemap-modal').removeClass('on');
    })

});