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

      var maxHeight = 0;

      $('.grid article').each(function(){
        if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
      });

      console.log(maxHeight);
      $('.grid article').height(maxHeight);

      $('.grid').masonry({
        // options
        itemSelector: 'article'
      });


      $('article').hover(
          function () {
            $(this).addClass('hover');
          },
          function () {
            $(this).removeClass('hover');
          }
      );


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
