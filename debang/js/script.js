'use strict';

$(function(){
	$(".gnb > li > a").on('mouseenter focus', function(){
		var gnbIndex = $(".gnb > li > a").index($(this));
	     $(".gnb .inner").removeClass('on');
		 $('.gnb .inner:eq('+ gnbIndex +')').addClass('on');
	});
	$('header').on("mouseleave", function(){
		$('.gnb .inner').removeClass('on');
	});
});

//splitting.js=> 글자애니메이션
$(function() { Splitting(); });


//fixHeader

	var scrollFix = 0;
	scrollFix = $(document).scrollTop();
	fixHeader();
	
//윈도추창 조절시 이벤트	
$(window).on('scroll resize', function(){
	scrollFix = $(document).scrollTop();
	fixHeader();
});

//고정헤더 함수
function fixHeader(){
	if(scrollFix  > 150) {
		$('header').addClass('on');
	}else {
		$('header').removeClass('on');
	}
}

//.top-visual 이미지슬라이드
$(function() {
    $(".visual .slide").slick({   // css!!!!! 애니적용완료후에!!!!arrows 와 dots : true 로변경
        arrows: true, //화살표
        dots:false , //인디케이터 해제
        autoplay: true, //자동재생
        fade: true, //페이드인 효과        
        autoplaySpeed: 7000, //재생시간
        pauseOnHover:false, //마우스 오버, 포커스시 멈추는것 해제
		pauseOnFocus:false
    });	
	$(".slick-prev").text("prev"); // 이전버튼 글자 바꿔줌
	
	//두번째 슬라이드
	$(".slide2").slick({   
        arrows: false, 
        dots: true, 
        autoplay: true, //자동재생   
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
        autoplaySpeed: 6000, 
        pauseOnHover:true, //호버시 멈추도록 true로 바꿔줌
		pauseOnFocus:true //호버시 멈추도록 true로 바꿔줌
    });
	$('.slide2 #slick-slide-control10').text("서울 마곡지구 업무용지");
	$('.slide2 #slick-slide-control11').text("서울 마곡지구 대방디엠시티2차");
	$('.slide2 #slick-slide-control12').text("화성 동탄 1차 대방디엠시티 더 센텀");
	$('.slide2 #slick-slide-control13').text("광주 수완 대방노블랜드6차");
  });	
	
//스크롤다운
$(function(){
	$('.scroll').on('click', function(){
		var scroll = $('#scroll').offset().top;
		$('html, body').animate({scrollTop : (scroll)},400);
	});
});

// 스크롤애니메이션
$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	});    
});
	
//비디오부분
$(function(){
	$('.videoBox .mask').on('click', function(){
		$(this).css({"display":"none"});
		$('.videoBox iframe').css({"display":"block"});
	});
});








