$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 400
        }, 700);
        return false;
    });

});