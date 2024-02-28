(function($) {

	"use strict";

	/* MOBILE MENU */
	$('nav.menu').meanmenu({
		meanMenuClose: 'X',
		meanMenuCloseSize: '18px',
		meanScreenWidth: '991',
		meanExpandableChildren: true,
		meanMenuContainer: '.mobile-menu',
		onePage: true
	});
	
    /* WOW ANIMATION SETTING */
    var wow = new WOW({
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    }); 

	// Hero main slider active js
	$('.hero-slider-active').slick({
		autoplay: true,
		infinite: true,
		fade: true,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-arrow-right"></i></button>',
		responsive: [{
			breakpoint: 768,
			settings: {
				arrows: false,
			}
		}, ]
	});
	
	/* TESTIMONIAL SLIDER */
    if ($('.testimony-carousel').length > 0) {
        $('.testimony-carousel').owlCarousel({
            margin:30,
            //loop:true,
            loop:($(".testimony-carousel .item").length > 1) ? true: false,
            nav:false,
            dots: true,
            autoplay:true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>' ],
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                992:{
                    items:2
                },
                1200:{
                    items:2
                }
            }
        });
    }
	
    if ($('.video-carousel ').length > 0) {
        $('.video-carousel ').owlCarousel({
            margin:10,
            //loop:true,
            loop:($(".video-carousel .item").length > 1) ? true: false,
            nav:true,
            dots: false,
            autoplay:true,
            navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>' ],
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:2
                },
                1200:{
                    items:3
                }
            }
        });
    }
	
	
	
	/* POPUP VIDEO */  
    if ($(".video-btn").length) {
        $(".video-btn").on("click", function(){
            $.fancybox({
                href: this.href,
                type: $(this).data("type"),
                'title'         : this.title,
                helpers     : {  
                    title : { type : 'inside' },
                    media : {}
                },
                

                beforeShow : function(){
                    $(".fancybox-wrap").addClass("gallery-fancybox");
                }
            });
            return false
        });    
    }
	
	$(window).on('load', function() {
        $('.fancybox').fancybox();
        
        
        /***** Navigation Active Class Query *****/
		$(function($) {
		  var url = window.location.href;
		  $('nav ul li a').each(function() {
		    if (this.href === url) {
		      $(this).closest('li').addClass('active');
		    }
		  });
		});
    });
        
})(window.jQuery);



