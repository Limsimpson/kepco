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

    var c = 0;

    //    // 전력수급현황
    //    function refreshDonut() {
    //        c++;
    //        if (c <= 50) {
    //            var angle = c * 180 / parseFloat(50);
    //            console.log(angle);
    //            //            $(".chart-fill").animate({
    //            //                rotate: angle + "deg"
    //            //            }, 2000);
    //            $(".chart-fill").rotate(angle);
    //        } else {
    //            clearInterval(t1);
    //        };
    //        return false;
    //    };
    //
    //    $(document).ready(function () {
    //        t1 = setInterval(refreshDonut, 50);
    //        $(".refresh").on('click', () => {
    //            c = 0;
    //            t1 = setInterval(refreshDonut, 50);
    //            return false;
    //        });
    //    }); // 전력수급현황 종료
});
