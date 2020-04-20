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

$(window).scroll(function () {
  $('.fadein').each(function () {
    var elemPos = $(this).offset().top,
      scroll = $(window).scrollTop(),
      windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 100) {
      $(this).addClass('scrollin');
    }
  });
});

// スクロール
