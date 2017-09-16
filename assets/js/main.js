(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
        $(".video-play-btn").magnificPopup({
            type: 'video',
        });

        $(".testimonial-slides").owlCarousel({
        	items:1,
        	nav:false,
        	dots:true,
        	loop:true,
            autoplay: true
        });

    });

    jQuery(window).load(function(){
        
    });


}(jQuery));	