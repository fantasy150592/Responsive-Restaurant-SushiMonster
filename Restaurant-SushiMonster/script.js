$(document).ready(function() {

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