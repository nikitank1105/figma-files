$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 1
            }
        }
    })
    $('.multiple-items').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
});
// $(document).ready(function() {
//     $('.multiple-items').slick({
//         dots: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//     });
//     $('.slide-items').slick({
//         dots: true,
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 3
//     });
//     $('.variable-width').slick({
//         dots: true,
//         infinite: true,
//         speed: 300,
//         slidesToShow: 1,
//         centerMode: true,
//         variableWidth: true
//     });

// });