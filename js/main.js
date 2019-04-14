
// jQuery is required to run this code
$( document ).ready(function() {
  scaleVideoContainer();

  initBannerVideoSize('.video-container .poster img');
  initBannerVideoSize('.video-container .filter');
  initBannerVideoSize('.video-container video');

  $(window).on('resize', function() {
    scaleVideoContainer();
    scaleBannerVideoSize('.video-container .poster img');
    scaleBannerVideoSize('.video-container .filter');
    scaleBannerVideoSize('.video-container video');
  });
});

function scaleVideoContainer() {
  var height = $(window).height() + 5;
  var unitHeight = parseInt(height) + 'px';
  $('.homepage-hero-module').css('height',unitHeight);
}

function initBannerVideoSize(element){
  $(element).each(function(){
    $(this).data('height', $(this).height());
    $(this).data('width', $(this).width());
  });

  scaleBannerVideoSize(element);
}

function scaleBannerVideoSize(element) {

  var windowWidth = $(window).width(),
  windowHeight = $(window).height() + 5,
  videoWidth,
  videoHeight;

  // console.log(windowHeight);

  $(element).each(function(){
    var videoAspectRatio = $(this).data('height')/$(this).data('width');

    $(this).width(windowWidth);

    if(windowWidth < 1000){
        videoHeight = windowHeight;
        videoWidth = videoHeight / videoAspectRatio;
        $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

        $(this).width(videoWidth).height(videoHeight);
    }

    $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

  });
}
$(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;

		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);

	});
  var linc2 = $('.header_fade'),
      timeoutId;
    $('.vievhidemenu').hover(function(){
        clearTimeout(timeoutId);
        linc2.show('slow');
    }, function(){
        timeoutId = setTimeout($.proxy(linc2,'hide'), 1000)
    });
    linc2.mouseenter(function(){
        clearTimeout(timeoutId);
    }).mouseleave(function(){
        linc2.hide('slow');
    });
});
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:1,
    autoplay: 0,
    autoplaySpeed: 1000,
    itemsDesktop: [1199, 1],
    itemsMobile: [479, 1],
    dots : true,
  }

  );

});
