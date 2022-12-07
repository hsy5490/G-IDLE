$(document).ready(function(){
    $(".menu_toggle_btn").click(function(){
        $('.gnb').stop().toggle()
    })
});
$(function(){
    $('.slider_img').bxSlider({
        mode: 'fade',
        auto: true,
        autoControls: false,
        autoHover: true,
        pager: true,
        slideWidth: '1920px'
    });
});s