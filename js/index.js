$(function () {

    //MAIN 메뉴
    $("#gnb>li").on("mouseover focusin", function () {
        $(this).children(".sub").stop().slideDown(300);
        $(this).addClass("on");
    })
    $("#gnb>li").on("mouseout focusout", function () {
        $(this).children(".sub").stop().slideUp(300);
        $(this).removeClass("on");
    })

    // TAB메뉴

    $(".tab_content").hide();
    $(".tab_content:first").show();

    $("ul.tab_title li").click(function () {
        if ($(this).hasClass('more')) {
            // window.open('http://asddasd.com', '_self')
            return;
        } else {
            $(this).siblings("li").removeClass("selected");
            //$(this).addClass("active").css({"color": "darkred","font-weight": "bolder"});
            $(this).addClass("selected");
            $(".tab_content").hide();
            var activeTab = $(this).attr("rel");
            $("#" + activeTab).fadeIn();
        }
    });

    // ROLLING BANNER

    $(".rolling_ban").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    // 전력 수급 현황

    $(".refresh").click(function () {
        $(".chart-fill").removeClass("on");
        setTimeout(chart, 300);
        return false;
    });

    function chart() {
        $(".chart-fill").addClass("on");
    };

    $(window).scroll(function () {
        var off1 = $(".ban_right>.lower").offset().top;
        var sct = $(window).scrollTop();
        console.log(off1, sct);
        if (sct >= off1) {
            $(".chart-fill").addClass("on");
        };
    });

    /*
     var count = 0;
     count++;
     if(count%2 == 1){
        $(".chart-fill").removeClass("on")
     }else{
         $(".chart-fill").addClass("on");
     };
     */ // 전력수급현황 종료

    // 서브페이지 로컬메뉴

    $(".local>ul>li").click(function () {
        $(this).children(".local_sub").stop().slideDown();
        $(this).siblings("li").children(".local_sub").stop().slideUp();
        return false;
    }); // 서브페이지 로컬메뉴 종료

    // 모바일 메뉴 클릭 이벤트

    $(".m_menu").click(function () {
        $(".mobile").animate({
            "right": "0"
        }, 500);
    });
    $(".btn_close").click(function () {
        $(".mobile").animate({
            "right": "-100%"
        }, 500);
    }); // 모바일 메뉴 클릭 종료

    // 모바일 메뉴 슬라이드

    $("#m_gnb>li>ul").stop().slideUp();
    $("#m_gnb>li").click(function () {
        $(this).children("ul").stop().slideToggle();
        $(this).siblings("li").children("ul").stop().slideUp();
    }); // 메뉴슬라이드 종료

    // 모바일 메뉴 전환
    $(".m_button>a").eq(0).click(function () {
        $(".mobile>ul").eq(1).stop().fadeOut(500);
        $(".mobile>ul").eq(0).stop().fadeIn(500);
    });
    $(".m_button>a").eq(1).click(function () {
        $(".mobile>ul").eq(0).stop().fadeOut(500);
        $(".mobile>ul").eq(1).stop().fadeIn(500);
    });
});
