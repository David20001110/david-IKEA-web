$(function () {
    $('.menu li').on({
        mouseenter: function () {
            $(this).children("div").stop().slideDown();
        },
        mouseleave: function () {
            $(this).children("div").stop().slideUp();
        }
    });

    /* 交換下拉選單定位 */
    $(window).scroll(function(){
        if($(this).scrollTop() == 0){
            $('.menu div').css("bottom","80px");
            $('.menu div').css("top","auto");
        }
        else{
            $('.menu div').css("top","80px");
            $('.menu div').css("bottom","auto");
        }
    });

    /* 滾動至指定位置啟動動畫 */
    $(window).scroll(function () {  /* 要找卷軸(scroll)位置的都去選window */
        var h = $(window).height() -300;
        if ($(this).scrollTop() > h) {
            $('.food_1').css("animation-name", "food_1");
            $('.food_2').css("animation-name", "food_2");
        }
    });


    /* lightbox(有改動預設值時，才需要寫) */
    lightbox.option({
        'wrapAround': false
    })
    
});

