$(document).ready(function() {
    //toggle btn
    $('.navbar-toggler').click(function() {
        $('.navbar-toggler').toggleClass('change');
    });
    //sticky navbar less padding
    $(window).scroll(function() {
        let position = $(this).scrollTop();
        //console.log(position);
        if (position >= 718) {
            $('.navbar').addClass('navbar-background');
            $('.navbar').addClass('fixed-top');
        } else {
            $('.navbar').removeClass('navbar-background');
            $('.navbar').removeClass('fixed-top');
        }
    });

    //smooth scroll
    $('.nav-item a, .header-link, #back-to-top').click(function(link) {

        link.preventDefault();

        let target = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(target).offset().top - 25
        }, 2000);

    });

    //back to top
    $(window).scroll(function() {
        let position = $(this).scrollTop();
        //console.log(position);
        if (position >= 718) {
            $('#back-to-top').addClass('scrollTop');

        } else {
            $('#back-to-top').removeClass('scrollTop');

        }
    });

    //ripple
    $('#header, .info').ripples({
        dropRadius: 10,
        perturbance: 0.001,

    });

    // magnific popup
    $('.parent-container').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        // other options
        gallery: {
            enabled: true
        }
    });

});