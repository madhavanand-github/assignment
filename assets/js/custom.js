// For Carousel & Show/Hide Message

(function ($) {
    $(document).ready(function () {
        $('.form-cont-items').owlCarousel({
            loop: true,
            margin: 0,
            autoplay: true,
            responsiveClass: true,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1,
                    dots: true
                },
                600: {
                    items: 1,
                    dots: true
                },
                1000: {
                    items: 1,
                    dots: true,
                    loop: true
                }
            }
        });
    });
    $(".login-btn, .reg-btn").on('click', function () {
        if ($("#message").css("visibility") === "hidden") {
            $("#message").css("visibility", "visible"); // Change visibility to block
        } else {
            $("#message").css("visibility", "hidden"); // Change visibility to none
        }
    })



})(jQuery);

function hideShow() {
    $('.form-cont-wrapper').hide();
    $('.auth-form').show();
}
function back() {
    $('.form-cont-wrapper').show();
    $('.auth-form').hide();
}
function navigateRegistration() {
    $('.name-field').show();
    $('.reg-btn').show();
    $('.navigateLog').css('display', 'block');
    $('.navigateRegistration').hide();
    $('.login-btn').hide();
    $('.section-title h2').innerHTML = "I have changed!";
}
function navigateLog() {
    $('.login-btn').show();
    $('.navigateRegistration').show();
    $('.name-field').hide();
    $('.reg-btn').hide();
    $('.navigateLog').hide();
}