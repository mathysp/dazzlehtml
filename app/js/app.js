'use strict';

var app = (function(document, $) {
	var docElem = document.documentElement,
		_userAgentInit = function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		},
		_init = function() {
			$(document).foundation();
      // needed to use joyride
      // doc: http://foundation.zurb.com/docs/components/joyride.html
      $(document).on('click', '#start-jr', function () {
          $(document).foundation('joyride', 'start');
      });
			_userAgentInit();


      $('article').on('touchstart',
        function () {
          $(this).addClass('hover');
        }
      );
      $('article').on('touchend',
          function () {
          $(this).removeClass('hover');
        }
      );
      $('article').hover(
        function () {
          $(this).addClass('hover');
        },
        function () {
          $(this).removeClass('hover');
        }
      );

      var maxHeight = 0;

      /*$('.grid article').each(function(){
        if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
      });

      $('.grid article').height(maxHeight);*/

      /* $('.grid').isotope({
        // options
        itemSelector: 'article',
        percentPosition: true,
        masonry: {
          // use element for option
          columnWidth: 'article'
        }
      }); */

     /* function reLayout() {
        $('.grid').isotope('layout');
      };

      var resizeTimer;
      $(window).resize(function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(reLayout, 100);
      });*/


      $('a.totop').click(function(){
        $('html, body').animate({scrollTop: '0px'}, 300);
        event.preventDefault();
      });

		};
	return {
		init: _init
	};
})(document, jQuery);

(function() {
	app.init();
})();
