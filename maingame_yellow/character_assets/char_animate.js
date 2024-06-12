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
        "character_assets/Scene - Yellow Character/(Scene) Eat Ice Cream/Versi gif.gif"
      );
      image.css({
        transform: "translateX(-39%)",
      });
      intervalId = setInterval(function () {
        image.css({
          transform: "translateX(-50%)",
        });
        image.attr("src", originalImg);
        clearInterval(intervalId);
        isAnimating = false;
      }, 2200);
      break;

    case "tidur":
      clearInterval(intervalId);
      image.attr("src", "character_assets/Yellow Character/Anak/Tidur.gif");
      image.css({
        transform: "scale(1.3) translate(-22%,-11.5%)",
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
        "character_assets/Yellow Character/Anak/Minum Obat.gif"
      );
      image.css({
        transform: "scale(1.17) translate(-35%, -7%)",
      });
      intervalId = setInterval(function () {
        image.css({
          transform: "scale(1) translate(-50%,0%)",
        });
        image.attr("src", originalImg);
        clearInterval(intervalId);
        isAnimating = false;
      }, 3200);
      break;
    case "main":
      setTimeout(function () {
        window.location.href = "../MainGame/main_game.html";
      }, 0);
      break;
    default:
      break;
  }
}
