$(function () {    
    $(window).scroll(function () {   
        var scrollPos = $(window).scrollTop();     
        var windowHeight = $(window).height();
        // bg scroll function////////////////////////////////////////////////////
        $('#js_hamburger').css('transform', 'translateX(' + (scrollPos / 5) + 'px)')

        // fade_in y60 function////////////////////////////////////////////////////
        $('.js_animated_y60').each(function () {
            var thisPos = $(this).offset().top;
            if ((windowHeight + scrollPos) >= thisPos) {
                $(this).addClass('fade_in');
            }
        });
    }); 

    // menu toggle_show function////////////////////////////////////////////////////
    $('.showmenu').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('menu-show');
    });
});

