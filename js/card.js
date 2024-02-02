let sliderRight = $('.slider_right'),
    slides      = $('.slider_left .slide');

sliderRight.slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    responsive: [{
        breakpoint: 767,
        settings: {
            dots: true
        }
    }]
});


(function($) {
    $(function() {
        $('select').styler({
            selectSearch: true,
        });
        $('.slider_left .slide').click(function() {
            sliderRight.slick('slickGoTo', $(this).index())
        })
        sliderRight.on('beforeChange', function(event, slick, currentSlide, nextSlide){
            slides.removeClass('active')
            slides.eq(nextSlide).addClass('active')
        });
    });
})(jQuery);
