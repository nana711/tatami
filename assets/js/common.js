$(function () {
  $(".Header--hams").on("click", function () {
    $(".Header--hams,.grobalNav").toggleClass("clicked");
  });
  $(".grobalNav_list--item").on("click", function () {
    $(".Header--hams.clicked,.grobalNav.clicked").removeClass("clicked");
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
});
// スクロール