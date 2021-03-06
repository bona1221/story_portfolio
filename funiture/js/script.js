'use strict';

//스크롤 애니메이션
$(function(){
    $('.animate').scrolla({
        mobile: false,
        once: false
    });
});




	$(function() {
		var scrollTop = 0;
        //스크롤했을때 이벤트 적용
		scrollTop = $(document).scrollTop();
		ani('.gallery, .top_gallery, .studio, .project, .service, .service_txt');
		
        //윈도우창사이즈 조절시 동일하게 이벤트 적용
		$(window).on('scroll resize', function() {
			scrollTop = $(document).scrollTop();
            ani('.gallery, .top_gallery, .studio, .project, .service, .service_txt');
		});
        
        //함수선언 ani-함수명/(selector)-선택자
		function ani(selector) {
				$(selector).each(function() {
                        //변수선언
						var $selector = $(this);
						var minShow = $selector.offset().top - $(window).height();//offset: 선택한 요소의 좌표를 가져옴
						var maxShow = $selector.offset().top + $selector.outerHeight();
                        //리무브클래스를 주면 이벤트가 지워지기 때문에 스크롤 할때마다 이벤트나타남
				        $selector.removeClass('down on up'); // <- 이거 주석처리하면 이벤트 딱 한번씩만 나타남
                        //이벤트 붙이기
						if (scrollTop < minShow) { 
								$selector.addClass('down'); //스크롤이 selector요소의 위쪽일때  down이라는 가상 이벤트 부여
						} else if (scrollTop > maxShow) {
								$selector.addClass('up'); //스크롤이 selector요소의 밑쪽일때  up이라는 가상 이벤트 부여
						} else {
								$selector.addClass('on'); //스크롤이 selector요소에 위치했을때 on이벤트 부여
						}
				});
		}
	});









//window.onscroll = function() {ani()};
//
//function ani() {
//    if (.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
//        document.getElementById("gallery, studio").className = "slideUp"
//    }
//}
