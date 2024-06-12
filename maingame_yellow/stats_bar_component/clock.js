window.onload = function () {
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let lastTime = null;
  let duration = 15;

  let savedTime = localStorage.getItem("savedTime");
  if (savedTime) {
    let savedDate = new Date(savedTime);
    hours = savedDate.getHours();
    minutes = savedDate.getMinutes();
    seconds = savedDate.getSeconds();
  }

  function updateClock(currentTime) {
    if (!lastTime) lastTime = currentTime;
    let timeElapsed = currentTime - lastTime;

    if (timeElapsed >= duration) {
      lastTime = currentTime;
      seconds++;

      if (seconds >= 60) {
        seconds = 0;
        minutes++;
      }

      if (minutes >= 60) {
        minutes = 0;
        hours++;
      }

      if (hours >= 24) {
        hours = 0;
      }

      let hoursString = hours < 10 ? "0" + hours : hours;
      let minutesString = minutes < 10 ? "0" + minutes : minutes;

      document.getElementById("clock").innerHTML =
        hoursString + ":" + minutesString;

      let currentDate = new Date();
      localStorage.setItem("savedTime", currentDate);
    }

    requestAnimationFrame(updateClock);
  }

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      cancelAnimationFrame(requestAnimationFrame(updateClock));
    } else {
      requestAnimationFrame(updateClock);
    }
  });

  requestAnimationFrame(updateClock);
};

$(document).ready(function(){
  if (hours => 6 && hours < 18) {
    $("#bg_vid1").attr("src", "../maingame_yellow/bg_assets/MORNING LIVING ROOM.mp4");
    $("#bg_vid2").attr("src", "../maingame_yellow/bg_assets/NIGHT KITCHEN.mp4");
    $("#bg_vid3").attr("src", "../maingame_yellow/bg_assets/MORNING BEDROOM.mp4");
  }
  if (hours => 18 && hours < 6) {
    $("#bg_vid1").attr("src", "../maingame_yellow/bg_assets/NIGHT LIVING ROOM.mp4");
    $("#bg_vid2").attr("src", "../maingame_yellow/bg_assets/NIGHT KITCHEN.mp4");
    $("#bg_vid3").attr("src", "../maingame_yellow/bg_assets/NIGHT BEDROOM.mp4");
  }
});

const videoPagi = [
  "bg_assets/MORNING LIVING ROOM.mp4",
  "bg_assets/MORINING KITCHEN.mp4",
  "bg_assets/MORNING BEDROOM.mp4",
];

const videoMalam = [
  "bg_assets/NIGHT LIVING ROOM.mp4",
  "bg_assets/NIGHT KITCHEN.mp4",
  "bg_assets/NIGHT BEDROOM.mp4",
];

let currentVideoIndex = 0;

const videos = document.querySelectorAll("#bg_videos_container video");

function changeVideo() {
  if (hours => 6 && hours < 18) {
    currentVideoIndex++;
    if (currentVideoIndex >= videoPagi.length) {
      currentVideoIndex = 0;
    }
    videos.forEach((video, index) => {
      video.src = videoPagi[currentVideoIndex];
      if (index === currentVideoIndex) {
        video.play();
      } else {
        video.pause();
      }
    });
  }

  if (hours => 18 || hours < 6) {
    currentVideoIndex++;
    if (currentVideoIndex >= videoMalam.length) {
      currentVideoIndex = 0;
    }
    videos.forEach((video, index) => {
      video.src = videoMalam[currentVideoIndex];
      if (index === currentVideoIndex) {
        video.play();
      } else {
        video.pause();
      }
    });
  }
}

document.getElementById("next_btn").addEventListener("click", () => {
  changeVideo();
});
document.getElementById("prev_btn").addEventListener("click", () => {
  changeVideo();
});
