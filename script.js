$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 560) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 560);
        return false;
    });

});