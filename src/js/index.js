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

$(function(){
  $('a[href^="#"]').click(function () {
    var elmHash = $(this).attr('href');
    var pos = $(elmHash).offset().top;
    $('html,body').animate({scrollTop: pos},500,"swing");
    return false;
  })
});
