$(function () {
    var showskill = false;
    // gototop function////////////////////////////////////////////////////
    $('.js_scroll_top').click(function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        var targetPos = $(target).offset().top;
        $('html,body').animate({ scrollTop: targetPos }, 750);
    })

    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        // animation function////////////////////////////////////////////////////
        $('.js_scroll_top').each(function () {
            var target = $(this).attr('href');
            var targetPos = $(target).offset().top;
            var targetHeight = $(target).outerHeight();
            if (targetPos - 1 < scrollPos && (targetPos + targetHeight) > scrollPos) {
                $('.js_scroll_top').removeClass('active');
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
        // fade_in y60 function////////////////////////////////////////////////////
        $('.js_animated_y60').each(function () {
            var thisPos = $(this).offset().top;
            if ((windowHeight + scrollPos) >= thisPos) {
                $(this).addClass('fade_in');
            }
        });
        // fade_in x60 function////////////////////////////////////////////////////
        $('.js_animated_x60').each(function () {
            var thisPos = $(this).offset().top;
            if ((windowHeight + scrollPos) >= thisPos) {
                $(this).addClass('fade_in');
            }
        });
        // fade_in x-60 function////////////////////////////////////////////////////
        $('.js_animated_x-60').each(function () {
            var thisPos = $(this).offset().top;
            if ((windowHeight + scrollPos) >= thisPos) {
                $(this).addClass('fade_in');
            }
        });
        // bg scroll function////////////////////////////////////////////////////
        $('#js_hamburger').css('transform', 'translateX(' + (scrollPos / 5) + 'px)')
    });
    // menu toggle_show function////////////////////////////////////////////////////
    $('.showmenu').on('click', function(e) {
        e.preventDefault();
        $('body').toggleClass('menu-show');
    });
    

});

