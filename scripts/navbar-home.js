$(document).ready(function(){
    var nav = $('nav');
    var initialNavOffset = nav.offset().top;

    nav.addClass('transparent');

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > initialNavOffset) {
            nav.removeClass('transparent');
            nav.addClass('fixed'); 
        } else {
            nav.addClass('transparent'); 
            nav.removeClass('fixed');
        }
    });
});
