$(function(){

    // 메뉴 시작
    $(".nav > ul > li").mouseover(function(){
        $(".nav > ul > li > ul").stop().fadeIn(400);
        $("#main").addClass("on");
    });
    $(".nav > ul > li").mouseout(function(){
        $(".nav > ul > li > ul").stop().fadeOut(100);
        $("#main").removeClass("on");
    });
    // 메뉴 끝

    // 슬라이드 시작
    let currentindex = 0;

    setInterval(function(){
        let nextindex = (currentindex + 1) % 3;
    
    $(".sliding").eq(currentindex).fadeOut(1200);
    $(".sliding").eq(nextindex).fadeIn(1200);
    currentindex = nextindex;
    
    }, 3000);
    // 슬라이드 끝

    // 탭 시작
    let tabBtn = $(".tab-btn > ul > li");
    let tabCont = $(".tab-cont > div");

    tabCont.hide().eq(0).show();

    tabBtn.click(function(){
        const index = $(this).index();

        $(this).addClass("active").siblings().removeClass("active");
        tabCont.eq(index).show().siblings().hide();
    });
    // 탭 끝

    // 모달 레이어 팝업창 시작
    $(".popup-btn").click(function(){
        $(".popup-review").show();
    });
    $(".popup-close").click(function(){
        $(".popup-review").hide();
    });
    // 모달 레이어 팝업창 끝
});