  const maxhealth = 100;
  const maxenergy = 100;
  const maxhunger = 100;
  const maxhappy = 100;
  
  let health = maxhealth;
  let energy = maxenergy;
  let hunger = maxhunger;
  let happy = maxhappy;
  
// health
$(document).ready(function () {
  let savedHealthPosition;
  let savedHealth;
  $(window).on("load", function () {
    savedHealthPosition = localStorage.getItem("healthPosition");
    savedHealth = localStorage.getItem("currhealth");
    if (savedHealth) {
      health = savedHealth;
    }
    $("#health_filler").css("top", savedHealthPosition ?? "0px");
  });

  $("#reset-button").click(function () {
    health = maxhealth;
    $("#health_filler").css("top", "0px");
  });

  $("#reset-button").click(function () {
    health = maxhealth;
    $("#health_filler").css("top", "0px");
  });

  $("#obat").click(function () {
    health = maxhealth;
    $("#health_filler").animate({ top: "0px" }, 5000);
  });

  $(window).on("unload", function () {
    localStorage.setItem("healthPosition", $("#health_filler").css("top"));
    localStorage.setItem("currhealth", health);
  });
});

// energy
$(document).ready(function () {
  let savedEnergyPosition;
  let savedEnergy;
  $(window).on("load", function () {
    savedEnergyPosition = localStorage.getItem("energyPosition");
    savedEnergy = localStorage.getItem("currenergy");
    if (savedEnergy) {
      energy = savedEnergy;
    }
    $("#energy_filler").css("top", savedEnergyPosition ?? "0px");
  });

  setInterval(function () {
    if (energy > 0) {
      energy -= 0.5;
      $("#energy_filler").animate({ top: "+=.25px" }, 1000);
      localStorage.setItem("energyPosition", $("#energy_filler").css("top"));
      localStorage.setItem("currenergy", energy);
    }
    if (energy < 0) {
      energy = 0;
    }
    console.log("energy:", energy);
  }, 5000);

  $("#reset-button").click(function () {
    energy = maxenergy;
    $("#energy_filler").css("top", "0px");
  });

  $("#tidur").click(function () {
    energy = maxenergy;
    $("#energy_filler").animate({ top: "0px" }, 5000);
  });

  $(window).on("unload", function () {
    localStorage.setItem("energyPosition", $("#energy_filler").css("top"));
    localStorage.setItem("currenergy", energy);
  });
});

//hunger
$(document).ready(function () {
  let savedHungerPosition;
  let savedHunger;
  $(window).on("load", function () {
    savedHungerPosition = localStorage.getItem("hungerPosition");
    savedHunger = localStorage.getItem("currhunger");
    if (savedHunger) {
      hunger = savedHunger;
    }
    $("#hunger_filler").css("top", savedHungerPosition ?? "0px");
  });

  setInterval(function () {
    if (hunger > 0) {
      hunger -= 1.5;
      $("#hunger_filler").animate({ top: "+=.75px" }, 1000);
      localStorage.setItem("hungerPosition", $("#hunger_filler").css("top"));
      localStorage.setItem("currhunger", hunger);
    }
    console.log("hunger:", hunger);
    console.log("health:", health);

    if (hunger <= 0 && health > 0) {
      health -= 2;
      $("#health_filler").animate({ top: "+=1px" }, 1000);
      localStorage.setItem("healthPosition", $("#health_filler").css("top"));
      localStorage.setItem("currhealth", health);
    }
  }, 5000);

  $("#reset-button").click(function () {
    hunger = maxhunger;
    $("#hunger_filler").css("top", "0px");
  });

  $("#makan").click(function () {
    hunger = maxhunger;
    $("#hunger_filler").animate({ top: "0px" }, 5000);
  });

  $(window).on("unload", function () {
    localStorage.setItem("hungerPosition", $("#hunger_filler").css("top"));
    localStorage.setItem("currhunger", hunger);
  });
});

// happy
$(document).ready(function () {
  let savedHappyPosition;
  let savedHappy;
  $(window).on("load", function () {
    savedHappyPosition = localStorage.getItem("happyPosition");
    savedHappy = localStorage.getItem("currhappy");
    if (savedHappy) {
      happy = savedHappy;
    }
    $("#happy_filler").css("top", savedHappyPosition ?? "0px");
  });

  setInterval(function () {
    if (happy > 0) {
      happy -= 1;
      $("#happy_filler").animate({ top: "+=.5px" }, 500);
      localStorage.setItem("happyPosition", $("#happy_filler").css("top"));
      localStorage.setItem("currhappy", happy);
    }
    console.log("happy:", happy);
  }, 5000);

  $("#reset-button").click(function () {
    happy = maxhappy;
    $("#happy_filler").css("top", "0px");
  });

  $("#main").click(function () {
    happy = maxhappy;
    $("#happy_filler").animate({ top: "0px" }, 500);
    let timeout = setTimeout(function () {
      window.location.href = "../bermain_game_green/main_game.html";
    }, 650);
  });

  $(window).on("unload", function () {
    localStorage.setItem("happyPosition", $("#happy_filler").css("top"));
    localStorage.setItem("currhappy", happy);
  });
});

$(document).ready(function () {
  var level = 1;
  var maxLevel = 6;
  var eatCount = 0;
  var sleepCount = 0;

  var eatCount = 0;
  var sleepCount = 0;

  $("#makan").click(function () {
    eatCount++;
    if (eatCount == 5 && sleepCount == 2) {
      eatCount = 0;
      sleepCount = 0;
      level++;

      updateLevel();
    }
  });

  $("#tidur").click(function () {
    sleepCount++;
    if (eatCount == 5 && sleepCount == 2) {
      eatCount = 0;
      sleepCount = 0;
      level++;
      updateLevel();
    }
  });

  function updateLevel() {
    $("#level_curr").text(level);

    $("#level_bar").removeClass("full half").addClass(getLevelClass(level));
  }

  function getLevelClass(level) {
    switch (level) {
      case 1:
      case 4:
        return "";
      case 2:
      case 5:
        return "half";
      case 3:
      case 6:
        return "full"; // level penuh
      default:
        return "";
    }
  }
});
