import 'bootstrap'
import '../scss/main.scss'

$('[data-toggle="tooltip"]').tooltip()

if ($('.navbar-scroll').length > 0) {
    $(window).on('scroll', function () {
        var scroll_top = $(this).scrollTop();
        if (scroll_top > 100) {
            $('.navbar-scroll').removeClass('navbar-hidden').addClass('navbar-visible');
        }
        else {
            $('.navbar-scroll').removeClass('navbar-visible').addClass('navbar-hidden');
        }
    });
}

if ($('.scroll-to').length > 0) {
    $('.scroll-to').on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
}

if ($('.scroll-fade').length > 0) {
    $(window).on('scroll', function () {
        $('.scroll-fade').each(function () {
            fadeIn(this)
        });
    });
    $('.scroll-fade').each(function () {
        fadeIn(this)
    });
}

function fadeIn(element) {
    var position = $(element).offset().top;
    var scroll_top = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll_top + windowHeight - 50 > position) {
        $(element).removeClass("scroll-fade").addClass("scroll-fade-in");
    }
}