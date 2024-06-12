let isAnimating = false;

function changeImage(action) {
  if (isAnimating) {
    return;
  }

  const image = $("#gambar");
  const originalImg = image.attr("src");
  let intervalId = null;

  isAnimating = true;

  switch (action) {
    case "makan":
      clearInterval(intervalId);
      image.attr(
        "src",
        "character_assets/Green Character/Anak/Makan Burger.gif"
      );
      image.css({
        transform: "scale(1.2) translate(-28%,-8%)",
      });
      intervalId = setInterval(function () {
        image.css({
          transform: "translateX(-50%)",
        });
        image.attr("src", originalImg);
        clearInterval(intervalId);
        isAnimating = false;
      }, 2400);
      break;

    case "tidur":
      clearInterval(intervalId);
      image.attr("src", "character_assets/Green Character/Anak/Tidur.gif");
      image.css({
        transform: "scale(1.23) translate(-27%,-9%)",
      });
      intervalId = setInterval(function () {
        image.css({
          transform: "scale(1) translate(-50%,0%)",
        });
        image.attr("src", originalImg);
        clearInterval(intervalId);
        isAnimating = false;
      }, 4000);
      break;
    case "obat":
      clearInterval(intervalId);
      image.attr(
        "src",
        "character_assets/Green Character/Anak/Minum Obat.gif"
      );
      image.css({
        transform: "scale(1.2) translate(-30%, -7%)",
      });
      intervalId = setInterval(function () {
        image.css({
          transform: "scale(1) translate(-50%,0%)",
        });
        image.attr("src", originalImg);
        clearInterval(intervalId);
        isAnimating = false;
      }, 3800);
      break;
    case "main":
      setTimeout(function() {
        window.location.href = "../MainGame/main_game.html";
      }, 0);
      break;
    default:
      break;
  }
}

$(document).ready(function(){
  $('.slick-carousel').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
});

