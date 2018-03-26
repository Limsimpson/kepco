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

    $("ul.tabs li").click(function () {
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

    $(".rollingBan").slick({
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
});
