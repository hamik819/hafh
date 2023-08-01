var HAFH = window.HAFH || {};
HAFH = (function($) {
	'use strict';
	var common = {
        headerMotion: function(){
            let lastScroll = 0;
            $(window).scroll(function(){
                const curr = $(this).scrollTop();
                if(curr > lastScroll){
                    $('.header').addClass('hide');
                } else {
                    $('.header').removeClass('hide');
                }
                lastScroll = curr;
            });
        },
        listHover: function(){
			$('.main__list--body a').hover(function(){
				$('.main__list--body a').not(this).addClass('is-faded');
			}, function(){
				$('.main__list--body a').not(this).removeClass('is-faded');
			});
		},
		init: function() {
            common.headerMotion();
            common.listHover();
		}
	};

	$(document).ready(function() {
		common.init();
	});

})($);