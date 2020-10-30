$(function () {
  /*$(".carousel").carousel({ interval: 2000, pause: "false" });
  $("#carouselButton").click(function () {
    if ($("#carouselButton").children("i").hasClass("fa-pause")) {
      $(".carousel").carousel("pause");
      $("#carouselButton").children("i").removeClass("fa-pause");
      $("#carouselButton").children("i").addClass("fa-play");
    } else {
      $(".carousel").carousel("cycle");
      $("#carouselButton").children("i").removeClass("fa-play");
      $("#carouselButton").children("i").addClass("fa-pause");
    }
  });*/
  $("#contactButton").click(function () {
    $("#contactModal").modal("show");
  });
  $("#loginButton").click(function () {
    $("#loginModal").modal("show");
  });
  $("#bookForest").click(function () {
    $("#forestModal").modal("show");
  });
  $("#bookStave").click(function () {
    $("#staveModal").modal("show");
  });
  $("#bookMetal").click(function () {
    $("#metalModal").modal("show");
  });
  $("#bookCoastal").click(function () {
    $("#coastalModal").modal("show");
  });
  $(window).scroll(function(){
    $("#fadeText").css("opacity", 1 - $(window).scrollTop() / ($('.parallax1').height() / 4));
});
});
