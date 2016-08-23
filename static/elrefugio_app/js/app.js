/*$(document).ready(function() {


});


*/

function main() {

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
        bannerMargin = slideShowHeight * 0.25;
        bannerHeight = slideShowHeight * 0.50;
        $("#banner").css("margin", `${bannerMargin}px 0`);
        $("#banner").css("height", `${bannerHeight}px`);

        var topTextHeight = $("#banner :first-child").height();
        var bottomTextHeight = $("#banner .emphasis").height();
        var textMargin = bannerHeight - topTextHeight - bottomTextHeight;
        $("#banner :first-child").css("margin-bottom", `${textMargin}px`);

        var heroWidth = $("body").innerWidth().toString()
        $("#slideshow div img").css("width", heroWidth)
    };

    setTimeout(function() {
        resizeBanner();
    }, 50);


    setTimeout(function() {
        resizeBanner();
        $("#banner").fadeTo(1500, 1);
    }, 2500);

    window.addEventListener('resize', resizeBanner);

    if (resizeBanner() === 1){
      resizeBanner();
    }


    /********** Event photo max heights *******************/
    photoHeight = $(".event-photo").parent().prev().height();
    $(".event-photo").css("max-height", `${photoHeight}px`)


    /********** Removing last <hr> *****************/
    $("#eventos").children().last().children().last().remove();

}



$(document).ready(function() {
    main();

    $('#msg').hide();
    $('header').fadeTo(200, 1);
    $('main').fadeTo(200, 1);
    $('footer').fadeTo(200, 1);
});


