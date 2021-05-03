



//----upload------------
$(document).ready(function () {

    // get the name of uploaded file
    $('input[type="file"]').change(function () {
        var value = $("input[type='file']").val();
        if (value != "") {
            $('.js-value').text(value);
        } else {
            $('.js-value').text("upload a resume");
        }
    });

});



//----------------flip caption-----------------
$(function () {
    $('#projectCarousel').on('slid.bs.carousel', function() {
        $(this).find('.carousel-item.active .carousel-caption').addClass('pluse');
    })

    $('#projectCarousel').on('slide.bs.carousel .carousel-caption', function() {
        $(this).find('.carousel-item .carousel-caption').removeClass('pluse');
    })
})



//----------------swipe-----------------
$(".carousel").swipe({

    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

        if (direction == 'left') $(this).carousel('next');
        if (direction == 'right') $(this).carousel('prev');

    },
    allowPageScroll:"vertical"

});



