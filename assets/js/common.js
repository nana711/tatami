$(function () {
  $(".Header--hams").on("click", function () {
    $(this).toggleClass("clicked");

    if ($(this).hasClass("clicked")) {
      $(".grobalNav").addClass("clicked"); //クラスを付与
    } else {
      $(".grobalNav").removeClass("clicked"); //クラスを外す
    }
  });
});
// ハンバーガー
$(document).ready(function () {
  $(".slider").slick({
    arrows: false,
    autoplay: true,
    /* ポイントここから～ */
    autoplaySpeed: 0,
    cssEase: "linear",
    speed: 20000,
    /* ～ここまで */
    slidesToScroll: 2,
  });
});

// スライダー
