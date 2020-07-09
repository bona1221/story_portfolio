'use strict';

$(document).on('click', 'a[href="#"]', function(e) {
			   e.preventDefault();
			   });


//상단으로 부드럽게
$(function(){
    $('.goTop').on('click', function(){
        $('html, body').animate({ scrollTop : 0 }, 100 );
    });
});


//fixHeader
var scrollAni=0;
scrollAni = $(document).scrollTop();
fixHeader();

//윈도우창 조절시 이벤트
$(window).on('scroll resize',function(){
    scrollAni = $(document).scrollTop();
    fixHeader();
});

//고정해더 함수 header(와이스튜디오)
function fixHeader(){
    if(scrollAni > 990){
        $('header, .nav').addClass('on');
    }else{
        $('header, .nav').removeClass('on');
    }
};


//메인 일러스트 이미지 슬라이드
    $(function(){
        $("#main .slide").slick({
                autoplay: true, //자동재생
                autoplaySpeed: 3000, //재생시간
                pauseOnHover:false, //마우스 오버, 포커스시 멈추는것 해제
    		    pauseOnFocus:false 
        });
    });

//----------------------------------------------------------//
//사이드바 함수
function sideBar() {
    $('#aside').css({
        'top': (scrollTop + 500) + 'px'
    });
}

//사이드바 call 정보_(대방산업)
$(function(){
	$(".icon li .inner").on('mouseenter focus', function(){
		var gnbIndex = $(".inner li").index($(this));
	     $(".icon .inner").removeClass('on');
		 $('.icon .inner:eq('+ gnbIndex +')').addClass('on');
	});
	$('#aside').on("mouseleave", function(){
		$('.icon .inner').removeClass('on');
	});
});

//사이드바 함수
//고정헤더, 사이드바 이벤트 list
var scrollTop = 0;
scrollTop = $(document).scrollTop();
fixHeader();
sideBar();
//윈도우창 조절시에 이벤트
$(window).on('scroll resize', function() {
    scrollTop = $(document).scrollTop();
    fixHeader();
    sideBar();
        });

//스크롤 이벤트적용(한국 소비자원)
$(function(){
    var scrollTop = 0;
    //스크롤했을때 이벤트 적용
    scrollTop = $(document).scrollTop();
    ani('explain');
    
    //윈도우창사이즈 조절시 동일하게 이벤트 적용
    $(window).on('explain', function(){
        scrollTop = $(document).scrollTop();
        ani('explain')
    });
});

//서브웨이,글로우픽_ui.ux 사이드바
//function sideBar() {
//    $('#back_aside').css({'top': (scrollTop + 150) + 'px'});
//}

var scrollTop = 0;
scrollTop = $(document).scrollTop();
fixHeader();
sideBar();
//윈도우창 조절시에 이벤트
$(window).on('scroll resize', function() {
    scrollTop = $(document).scrollTop();
    fixHeader();
    sideBar();
        });

//-------------------------------------------------------------------//
//list 호버시 내용이 올라감

$(document).ready(function () {
    $(".brand_story").css("height", "0px");

    $(".whawhae, .debang, .whyshudio, .korea, .hanhwa, .nike, .blooming, .child, .subway, .glow, .poster, .blooming_poster, .typo, .logo").hover(
        function () {
            var target_height = $(this).attr("data-height");
            $(this).find(".brand_story").animate({
                height: 55
            }, 250, function () {}); 
            $(this).animate({
                height: target_height
            }, 250, function () {
                $(this).css("overflow", "hidden");
            });
        },
        function () {
            $(this).find(".brand_story").animate({
                height: 0
            }, 250, function () {
                $(this).css("overflow", "hidden");
            });
        }
    );

});
////https://www.firmalt.com/


//scroll evevnt _ explain animation (한국소비자원 에니메이션)
$(function(){
    var scrollTop = 0;
    //스크롤 이벤트 적용
    scrollTop = $(document).scrollTop();
    ani('.load, .explain, .story, .awards, .spac, .experience');
    
    //window
    $(window).on('scroll resize',function(){
        scrollTop = $(document).scrollTop();
        ani('.load, .explain, .story, .awards, .spac, .experience');
    });
});


//함수선언 ani-함수명/selector
function ani(selctor) {
  $(selctor).each(function(){
      //변수선언
      var $selector = $(this);
      var minShow = $selector.offset().top - $(window).height();//offset선택한 요소의 좌표를 가져옴
      var maxShow = $selector.offset().top + $selector.outerHeight();
      //리무브 클레스를 주면 이벤트가 지원져서 스크롤 할때마다 이벤트가 나타남
      $selector.removeClass('down on up');
      //이벤트 붙이기
      if (scrollTop < minShow) {
        $selector.addClass('down');
          
      } else if (scrollTop > maxShow) {
          $selector.addClass('up');
      } else {
          $selector.addClass('on');
      }
  });  
};



//웹 카테고리 자바(한국소비자원)
$(function(){
    var scrollTop = 0;
    scrollTop = $(document).scrollTop();
    ani('.slideup, .weblist, .whawhe_list');
    
    //윈도우창 사이즈 조절시 동일하게 이벤트 적용
    $(window).on('scroll resize', function() {
       scrollTop = $(document).scrollTop();
       ani('.slideup, .weblist, .whawhe_list');
});

function ani(selector) {
				$(selector).each(function() {
						var $selector = $(this);
						var minShow = $selector.offset().top - $(window).height();//offset: 선택한 요소의 좌표를 가져옴
						var maxShow = $selector.offset().top + $selector.outerHeight();
                        //리무브클래스를 주면 이벤트가 지워지기 때문에 스크롤 할때마다 이벤트나타남
				        $selector.removeClass('down on up');
                        //이벤트 붙이기
						if (scrollTop < minShow) { 
								$selector.addClass('up'); //스크롤이 selector요소의 위쪽일때  down이라는 가상 이벤트 부여
						} else if (scrollTop > maxShow) {
								$selector.addClass('down'); //스크롤이 selector요소의 밑쪽일때  up이라는 가상 이벤트 부여
						} else {
								$selector.addClass('on'); //스크롤이 selector요소에 위치했을때 on이벤트 부여
						}
				});
		}
	});


//이미지 슬라이드
window.onload=function(){
  $('.slid_img').slick({
  autoplay:true,
  autoplaySpeed:1500,
  arrows:false,
  centerMode:true,
  slidesToShow:3,
  slidesToScroll:1,
  pauseOnHover:false,
  pauseOnFocus:true
  });
};
	