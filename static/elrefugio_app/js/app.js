
/******** Nav Bar *******************************/
var $nav = $('header .nav-container'),
    $scrolled = $(".main-nav-scrolled"),
    topHeaderHeight = $("header .top-header").height();

$(window).scroll(function() {
    if ($(this).scrollTop() > topHeaderHeight) {
      $nav.addClass("fixed");
      $("main").addClass("scrolled");
      $(".navbar").css('border-top', 'none');
      $("#slideshow").css("margin-top", '40');
    } else {
      $nav.removeClass("fixed");
      $('main').removeClass("scrolled");
      $(".navbar").css('border-top', '1px solid #e7e7e7')
    }
});

/*********** Slide Show **************************/
$("#slideshow > div:gt(0)").hide();

setInterval(function() {
    $('#slideshow div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  4000);


/*********** Banner ******************************/


function resizeBanner() {
    slideShowHeight = $("#slideshow div img").height();
    console.log(slideShowHeight);
    bannerMargin = slideShowHeight * 0.25;
    bannerHeight = slideShowHeight * 0.50;
    $("#banner").css("margin", `${bannerMargin}px 0`);
    $("#banner").css("height", `${bannerHeight}px`);

    var heroWidth = $("body").innerWidth().toString()
    $("#slideshow div img").css("width", heroWidth)
}

resizeBanner();

setTimeout(function() {
    resizeBanner();
    $("#banner").fadeTo(1500, 1);
}, 3000);

window.addEventListener('resize', resizeBanner);


