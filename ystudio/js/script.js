'use strict';

$(document).on('click', 'a[href="#"]', function(e) {
			   e.preventDefault();
			   });


//gnb
$(function(){
	$('header .menuOpen').on('click', function(){
		$('.gnb').addClass('on');
	});
	$('.gnb .close').on('click', function(){
		$('.gnb').removeClass('on');
	});
});


//fixHeader
var scrollAni = 0;
scrollAni = $(document).scrollTop();
fixHeader();

//윈도우창 조절시 이벤트
$(window).on('scroll resize', function(){
    scrollAni = $(document).scrollTop();
    fixHeader();
});

//고정해더 함수
function fixHeader() {
  if(scrollAni > 150) {
   $('header').addClass('on');
  } else {
      $('header').removeClass('on');
  }
}
//상단으로 부드럽게
$(function(){
    $('.goTop').on('click', function(){
        $('html, body').animate({ scrollTop : 0 }, 400 );
    });
});

//스크롤 애니메이션
$(function(){
    $('.animate').scrolla({
        mobile: false,
        once: false
    });
});

//.top-visual 이미지 슬라이드
 $(function() {
        $(".visual .slide").slick({
            arrows: true, //화살표
            dots: false, //인디케이터 해제
            fade: true, //페이드인 효과
            autoplay: true, //자동재생
            autoplaySpeed: 4000, //재생시간
            pauseOnHover:false, //마우스 오버, 포커스시 멈추는것 해제
		    pauseOnFocus:false
        });
     $(".slick-prev , .slick-next").text("");
    }); 
     

