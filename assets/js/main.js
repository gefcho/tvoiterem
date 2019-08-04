$(function() {

    "use strict";


    //===== Prealoder

    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500);
    });


    //===== Mobile Menu 

    $(".navbar-toggler").on('click', function() {
        $(this).toggleClass('active');
    });

    $(".navbar-nav a").on('click', function() {
        $(".navbar-toggler").removeClass('active');
    });


    //===== close navbar-collapse when a  clicked

    $(".navbar-nav a").on('click', function() {
        $(".navbar-collapse").removeClass("show");
    });


    //===== Sticky

    $(window).on('scroll', function(event) {
        var scroll = $(window).scrollTop();
        if (scroll < 10) {
            $(".header-area").removeClass("sticky");
        } else {
            $(".header-area").addClass("sticky");
        }
    });


    //===== One Page Nav

    $('#nav').onePageNav({
        filter: ':not(.external)',
        currentClass: 'active',
    });


    //=====  Slick

    function mainSlider() {
        var BasicSlider = $('.slider-active');
        BasicSlider.on('init', function(e, slick) {
            var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: true,
            autoplaySpeed: 5000,
            dots: true,
            fade: true,
            arrows: false,
            responsive: [
                { breakpoint: 767, settings: { dots: false, arrows: false } }
            ]
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function() {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function() {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();

    //=====  Slick Showcase active

    $('.showcase-active').slick({
        dots: false,
        infinite: false,
        //autoplay: true,
        //autoplaySpeed: 6000,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        prevArrow: '<span class="prev"><i class="lni-arrow-left"></i></span>',
        nextArrow: '<span class="next"><i class="lni-arrow-right"></i></span>',
        adaptiveHeight: true,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                }
            }
        ]
    });

    //====== Gallery Popup
    $('.single-showcase').each(function() {
        $(this).magnificPopup({
            delegate: '.img-link',
            type: 'image',
            gallery: {
                enabled: true
            },
            closeOnContentClick: true,
            removalDelay: 300,
            mainClass: 'mfp-fade'
        });
    });


    //=====  Slick testimonial active

    $('.testimonial-active').slick({
        dots: false,
        autoplay: true,
        autoplaySpeed: 8000,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        arrows: false,
        adaptiveHeight: true,
    });


    //====== Magnific Popup

    $('.Video-popup').magnificPopup({
        type: 'iframe'
            // other options
    });


    //===== Back to top

    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });

    // Animate the scroll to yop
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });

    //====== Nice Number

    $('input[type="number"]').niceNumber({

    });


    //=====  Rating selection

    var $star_rating = $('.star-rating .fa');

    var SetRatingStar = function() {
        return $star_rating.each(function() {
            if (parseInt($star_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
                return $(this).removeClass('fa-star-o').addClass('fa-star');
            } else {
                return $(this).removeClass('fa-star').addClass('fa-star-o');
            }
        });
    };

    $star_rating.on('click', function() {
        $star_rating.siblings('input.rating-value').val($(this).data('rating'));
        return SetRatingStar();
    });

    SetRatingStar();




});