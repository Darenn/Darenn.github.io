// Index is the reader level
var rankArray = ['GD Noob', 'GD Minion', 'GD Scout', 'GD Footman', 'GD Knight', 'GD Captain', 'GD Wizard', 'GD King', 'GD Emperor'];
var xpPerLevel = 25;

var levelBar ;
var xpLabel;
var levelLabel;
var rankLabel;
var level_bar_background;
var xp_img;
var support_zone;

function updateRewardLabels() {
  var xp = parseInt(localStorage.getItem("xp"))
  xpLabel.innerHTML = xp + " xp"

  var level = parseInt(localStorage.getItem("level"))
  levelLabel.innerHTML = "level " + level;

  rankLabel.innerHTML = rankArray[localStorage.getItem("level")]
}

// Set all usefull variables and cookies for progression
function initProgression () {
  if (isMobile()) return;
  levelBar = document.getElementById("level_bar");
  xpLabel = document.getElementById("xp_label");
  levelLabel = document.getElementById("level_label"); 
  rankLabel = document.getElementById("rank-label");
  level_bar_background = document.getElementById("level_bar_background");
  xp_img = document.getElementById("xp_point"); 
  support_zone = document.getElementById("support-zone");

  if(!localStorage.getItem("xp")) {
    localStorage.setItem("xp", "0");
  }

  if(!localStorage.getItem("level")) {
    localStorage.setItem("level", "0");
  }
  levelBar.style.width = (localStorage.getItem("xp") % xpPerLevel) * 100/xpPerLevel + "%";
  updateRewardLabels();
}

function gainOneXp() {
  if (isMobile()) return;
  //new Audio("/assets/sounds/Pickup_XP_03.wav").play();
  var old_xp = parseInt(localStorage.getItem("xp"));
  var new_xp = old_xp + 1;
  localStorage.setItem("xp", (new_xp).toString())
  
  var width = parseInt(levelBar.style.width);
  var id = setInterval(frame, 90);
  level_bar_background.style.opacity = "100%"; // light up the bar during animation
  updateRewardLabels();
  
  function frame() {
    var targetWidth = (new_xp % xpPerLevel) * 100/xpPerLevel;
    if(new_xp % xpPerLevel == 0 && new_xp / xpPerLevel != 0) {
      targetWidth = 100;
    }
    
    if (width >= targetWidth) {
      console.log(targetWidth);
      clearInterval(id);
      level_bar_background.style.opacity = "30%";
      if(width >= 100) {
        levelBar.style.width = '0%';
        levelUp();
      }
    } else {
      width++; 
      levelBar.style.width = width + '%'; 
    }
  }
}

function levelUp() {
  if (isMobile()) return;
  var new_level = parseInt(localStorage.getItem("level")) + 1;
  support_zone.classList.add("animate__animated", "animate__fadeInRight");
  div.classList.add('collapsible-content'); 
  localStorage.setItem("level", new_level.toString());
  new Audio("/assets/sounds/victory.mp3").play();
  updateRewardLabels();
}

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}


