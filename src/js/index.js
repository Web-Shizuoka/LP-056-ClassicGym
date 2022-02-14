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
