import jQuery from "jquery";
const $ = jQuery;

$(window).on("scroll", function () {
  var top = $(this).scrollTop();
  $(".first-sp").each(function () {
    if (top > 200) {
      $(this).addClass("fadein");
    } else if (top < 200) {
      $(this).removeClass("fadein");
    }
  });
});

/* ===================================================
// Smooth Scroll
==================================================== */
$(function(){
  $('a[href^="#"]').click(function(){
    let speed = 500;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
