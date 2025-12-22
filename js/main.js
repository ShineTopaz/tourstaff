

$('#fullpage').fullpage({
    autoScrolling: true,
    scrollOverflow: true,        // 내부 스크롤 활성화
    scrollOverflowReset: true,   // 다시 올 때 맨 위로 초기화
    normalScrollElements: '.scroll-section', // 내부 스크롤만 브라우저 기본 스크롤 허용
    navigation: true,
    navigationPosition: 'left',
    navigationTooltips: ['home', 'about us', 'chat', 'function', 'main', 'Partner'],
    showActiveTooltip: true,
    onLeave: function (origin, destination, direction, trigger) {
        if (destination === 3 || destination === 4 || destination === 5) {
            $("#fp-nav").addClass("active");
        } else {
            $("#fp-nav").removeClass("active");
        }
    },
});
// 내부 스크롤이 끝나면 fullpage 다음 섹션으로 이동
var $scrollEl = $('.scroll-section');

$scrollEl.on('wheel', function (e) {
    var el = this;
    var delta = e.originalEvent.deltaY;
    var scrollTop = el.scrollTop;
    var scrollHeight = el.scrollHeight;
    var clientHeight = el.clientHeight;

    // 아래로 스크롤할 때 (scroll이 맨 끝에 닿은 경우)
    if (delta > 0 && scrollTop + clientHeight >= scrollHeight - 5) {
        e.preventDefault();
        $.fn.fullpage.moveSectionDown();
    }
    // 위로 스크롤할 때 (scroll이 맨 위에 있을 때)
    else if (delta < 0 && scrollTop <= 0) {
        e.preventDefault();
        $.fn.fullpage.moveSectionUp();
    }
});



//footer
const logo_list_1 = new Swiper(".logo_list_1", {
    spaceBetween: 25,
    slidesPerView: 5,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 5000,
    loop: true,
});

const logo_list_2 = new Swiper(".logo_list_2", {
    spaceBetween: 50,
    slidesPerView: 5,
    autoplay: {
        delay: 0,
        reverseDirection: true,
        disableOnInteraction: false,
    },
    speed: 5000,
    loop: true,
});

//depth2
$(".gnb>li").mouseenter(function () {
    $(this).find(".depth2").stop().fadeIn();
});
$(".gnb>li").mouseleave(function () {
    $(this).find(".depth2").stop().fadeOut();
});