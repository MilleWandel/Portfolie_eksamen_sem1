window.addEventListener("load", showTitle);

// deklarer variablerne point og tid
let point;
let liv;

function showTitle(){
  console.log("showTitle");
  hideAllScreens();

  document.querySelector("#start").classList.remove("hide");

  document.querySelector("#play").addEventListener("click", startGame);
}

function startGame() {
  console.log("startGame");

  hideAllScreens();

  // nulstil liv og point (sæt til startværdien)
  point = 0;
  liv = 3;

  // start timer
  document.querySelector("#fyld").classList.add("timer");

  // gå til endGame når tiden er gået
  document.querySelector("#fyld").addEventListener("animationend", endGame);

  // opdater point og liv på siden
  document.querySelector("#mine_points").textContent = point;

  // start falde-animation på Rable
  document.querySelector("#Rable_container").classList.add("fald");
  rnd = generateRandomNumber(5);
  document.querySelector("#Rable_container").classList.add("posFall" + rnd);
  rnd = generateRandomNumber(2);
  document.querySelector("#Rable_container").classList.add("speed" + rnd);
  rnd = generateRandomNumber(4);
  document.querySelector("#Rable_container").classList.add("delay" + rnd);

// start falde-animation på Rable
document.querySelector("#Rable_container1").classList.add("fald");
rnd = generateRandomNumber(5);
document.querySelector("#Rable_container1").classList.add("posFall" + rnd);
rnd = generateRandomNumber(2);
document.querySelector("#Rable_container1").classList.add("speed" + rnd);
rnd = generateRandomNumber(4);
document.querySelector("#Rable_container1").classList.add("delay" + rnd);

// start falde-animation på Rable
document.querySelector("#Rable_container2").classList.add("fald");
rnd = generateRandomNumber(5);
document.querySelector("#Rable_container2").classList.add("posFall" + rnd);
rnd = generateRandomNumber(2);
document.querySelector("#Rable_container2").classList.add("speed" + rnd);
rnd = generateRandomNumber(4);
document.querySelector("#Rable_container2").classList.add("delay" + rnd);

// start falde-animation på Rable
document.querySelector("#Rable_container3").classList.add("fald");
rnd = generateRandomNumber(5);
document.querySelector("#Rable_container3").classList.add("posFall" + rnd);
rnd = generateRandomNumber(2);
document.querySelector("#Rable_container3").classList.add("speed" + rnd);
rnd = generateRandomNumber(4);
document.querySelector("#Rable_container3").classList.add("delay" + rnd);

// start falde-animation på Rable
document.querySelector("#Rable_container4").classList.add("fald");
rnd = generateRandomNumber(5);
document.querySelector("#Rable_container4").classList.add("posFall" + rnd);
rnd = generateRandomNumber(2);
document.querySelector("#Rable_container4").classList.add("speed" + rnd);
rnd = generateRandomNumber(4);
document.querySelector("#Rable_container4").classList.add("delay" + rnd);


  // start falde-animation på able
  document.querySelector("#able_container").classList.add("fald");
  rnd = generateRandomNumber(5);
  document.querySelector("#able_container").classList.add("posFall" + rnd);
  rnd = generateRandomNumber(2);
  document.querySelector("#able_container").classList.add("speed" + rnd);
  rnd = generateRandomNumber(4);
  document.querySelector("#able_container").classList.add("delay" + rnd);

 // start falde-animation på able
 document.querySelector("#able_container1").classList.add("fald");
 rnd = generateRandomNumber(5);
 document.querySelector("#able_container1").classList.add("posFall" + rnd);
 rnd = generateRandomNumber(2);
 document.querySelector("#able_container1").classList.add("speed" + rnd);
 rnd = generateRandomNumber(4);
 document.querySelector("#able_container1").classList.add("delay" + rnd);

  // start falde-animation på able
  document.querySelector("#able_container2").classList.add("fald");
  rnd = generateRandomNumber(5);
  document.querySelector("#able_container2").classList.add("posFall" + rnd);
  rnd = generateRandomNumber(2);
  document.querySelector("#able_container2").classList.add("speed" + rnd);
  rnd = generateRandomNumber(4);
  document.querySelector("#able_container2").classList.add("delay" + rnd);

   // start falde-animation på able
   document.querySelector("#able_container3").classList.add("fald");
   rnd = generateRandomNumber(5);
   document.querySelector("#able_container3").classList.add("posFall" + rnd);
   rnd = generateRandomNumber(2);
   document.querySelector("#able_container3").classList.add("speed" + rnd);
   rnd = generateRandomNumber(4);
   document.querySelector("#able_container3").classList.add("delay" + rnd);

    // start falde-animation på able
  document.querySelector("#able_container4").classList.add("fald");
  rnd = generateRandomNumber(5);
  document.querySelector("#able_container4").classList.add("posFall" + rnd);
  rnd = generateRandomNumber(2);
  document.querySelector("#able_container4").classList.add("speed" + rnd);
  rnd = generateRandomNumber(4);
  document.querySelector("#able_container4").classList.add("delay" + rnd);


  // lyt efter klik på able, gå til funktionen clickable hvis der klikkes
  document.querySelector("#able_container").addEventListener("mousedown", clickable);
  // lyt efter klik på able, gå til funktionen clickable hvis der klikkes
  document.querySelector("#able_container1").addEventListener("mousedown", clickable);
  // lyt efter klik på able, gå til funktionen clickable hvis der klikkes
  document.querySelector("#able_container2").addEventListener("mousedown", clickable);
  // lyt efter klik på able, gå til funktionen clickable hvis der klikkes
  document.querySelector("#able_container3").addEventListener("mousedown", clickable);
  // lyt efter klik på able, gå til funktionen clickable hvis der klikkes
  document.querySelector("#able_container4").addEventListener("mousedown", clickable);

  // lyt efter klik på Rable, gå til funktionen clickRable hvis der klikkes
  document.querySelector("#Rable_container").addEventListener("mousedown", clickRable);
   // lyt efter klik på Rable, gå til funktionen clickRable hvis der klikkes
   document.querySelector("#Rable_container1").addEventListener("mousedown", clickRable);
    // lyt efter klik på Rable, gå til funktionen clickRable hvis der klikkes
  document.querySelector("#Rable_container2").addEventListener("mousedown", clickRable);
   // lyt efter klik på Rable, gå til funktionen clickRable hvis der klikkes
   document.querySelector("#Rable_container3").addEventListener("mousedown", clickRable);
    // lyt efter klik på Rable, gå til funktionen clickRable hvis der klikkes
  document.querySelector("#Rable_container4").addEventListener("mousedown", clickRable);

  // når able har faldet 1 gang, skal den dukke op et nyt sted (gå til reset funktionen)
  document.querySelector("#able_container").addEventListener("animationiteration", resetable);
   // når able har faldet 1 gang, skal den dukke op et nyt sted (gå til reset funktionen)
   document.querySelector("#able_container1").addEventListener("animationiteration", resetable);
    // når able har faldet 1 gang, skal den dukke op et nyt sted (gå til reset funktionen)
  document.querySelector("#able_container2").addEventListener("animationiteration", resetable);
   // når able har faldet 1 gang, skal den dukke op et nyt sted (gå til reset funktionen)
   document.querySelector("#able_container3").addEventListener("animationiteration", resetable);
    // når able har faldet 1 gang, skal den dukke op et nyt sted (gå til reset funktionen)
  document.querySelector("#able_container4").addEventListener("animationiteration", resetable);

  // når Rable har faldet 1 gang, skal den dukke op et nyt sted (gå til reset funktionen)
  document.querySelector("#Rable_container").addEventListener("animationiteration", resetRable);
   // når Rable har faldet 1 gang, skal den dukke op et nyt sted (gå til reset funktionen)
   document.querySelector("#Rable_container1").addEventListener("animationiteration", resetRable);
    // når Rable har faldet 1 gang, skal den dukke op et nyt sted (gå til reset funktionen)
  document.querySelector("#Rable_container2").addEventListener("animationiteration", resetRable);
   // når Rable har faldet 1 gang, skal den dukke op et nyt sted (gå til reset funktionen)
   document.querySelector("#Rable_container3").addEventListener("animationiteration", resetRable);
    // når Rable har faldet 1 gang, skal den dukke op et nyt sted (gå til reset funktionen)
  document.querySelector("#Rable_container4").addEventListener("animationiteration", resetRable);

}
function clickable() {
  console.log("clickable");

  // stopper med at lytte efter klik (fjerner eventlistener)
 this.removeEventListener("mousedown", clickable);

  // afspil able lyd

  // Tæl op på point (kan også skrives: point++;)
  point = point + 1;

  // Skriv point ud (vis nyt pointtal på siden)
  document.querySelector("#mine_points").textContent = point;

  // Stop hoppe-animation på container (sæt på pause ved at tilføje klassen frys)
  this.classList.add("frys");

  // Start forsvind-animation på sprite
  this.firstElementChild.classList.add("forsvind");

  // Går til reset funktionen når forsvind-animationen er færdig
  this.addEventListener("animationend", resetable);
}

function clickRable() {
  console.log("clickRable");

  // stopper med at lytte efter klik (fjerner eventlistener)
 this.removeEventListener("mousedown", clickRable);

  // afspil Rable lyd

  //Tæller ned på liv
  liv = liv - 1

//Viser opdateret antal liv på siden
document.querySelector("#mine_liv").textContent=liv

//hvis der ikke er flere liv tilbage, så stopper spillet
if (liv <= 0){
  endGame();
}

   // Tæl op på point (kan også skrives: point++;)
   point = point - 1;
  
   // Skriv point ud (vis nyt pointtal på siden)
   document.querySelector("#mine_points").textContent = point;

  // Stop falde-animation på container (sæt på pause ved at tilføje klassen frys)
 this.classList.add("frys");

  // Start forsvind-animation på sprite
  this.firstElementChild.classList.add("forsvind");

  // Går til reset funktionen når forsvind-animationen er færdig
  this.addEventListener("animationend", resetRable);
}

function resetable() {
  console.log("ableReset");

  //fjern alle klasser fra ables container (hop, frys og pos)
  this.classList = "";
  //fjern alle klasser fra ables sprite (forsvind)
  this.firstElementChild.classList = "";

   // Giv containeren en ny random position/speed/delay
   let rnd = generateRandomNumber(5);
   this.classList.add("posFall" + rnd);
   rnd = generateRandomNumber(2);
   this.classList.add("speed" + rnd);
   rnd = generateRandomNumber(4);
   this.classList.add("delay" + rnd);
 
   // genstart hoppe-animation (hoppeanimation sættes på igen)
   this.offsetHeight;
   this.classList.add("fald");
 
  // lyt efter klik på able, gå til funktionen clickable hvis der klikkes
  this.addEventListener("mousedown", clickable);
}

function resetRable() {
  console.log("RableReset");

  //fjern alle klasser fra ables container (hop, frys og pos)
  this.classList = "";
  //fjern alle klasser fra ables sprite (forsvind)
  this.firstElementChild.classList = "";

  // Giv containeren en ny random position/speed/delay
  let rnd = generateRandomNumber(5);
  this.classList.add("posFall" + rnd);
  rnd = generateRandomNumber(2);
  this.classList.add("speed" + rnd);
  rnd = generateRandomNumber(4);
  this.classList.add("delay" + rnd);

  // genstart hoppe-animation (hoppeanimation sættes på igen)
  this.offsetHeight;
  this.classList.add("fald");

  // lyt efter klik på CarlJohan, gå til funktionen clicCarlJohan hvis der klikkes
  this.addEventListener("mousedown", clickRable);
}

function endGame() {
  console.log("endGame");

  document.querySelector("#able_container").classList="";
  document.querySelector("#able_container1").classList="";
  document.querySelector("#able_container2").classList="";
  document.querySelector("#able_container3").classList="";
  document.querySelector("#able_container4").classList="";
  document.querySelector("#Rable_container").classList="";
  document.querySelector("#Rable_container1").classList="";
  document.querySelector("#Rable_container2").classList="";
  document.querySelector("#Rable_container3").classList="";
  document.querySelector("#Rable_container4").classList="";

  document.querySelector("#able_container").removeEventListener("click", clickable);
  document.querySelector("#Rable_container").removeEventListener("click", clickRable);

  // når carljohan har hoppet 1 gang, skal den dukke op et nyt sted (gå til reset funktionen)
  document.querySelector("#able_container").removeEventListener("animationiteration", resetable);
  // når fluesvamp har hoppet 1 gang, skal den dukke op et nyt sted (gå til reset funktionen)
  document.querySelector("#Rable_container").removeEventListener("animationiteration", resetRable);

  document.querySelector("#able_container").removeEventListener("animationend", resetable);
  document.querySelector("#Rable_container").removeEventListener("animationend", resetRable);

  document.querySelector("#able_container").removeEventListener("click", clickable);
  document.querySelector("#Rable_container").removeEventListener("click", clickRable);

  if (point >= 15) {
    levelComplete();
  } else {
    gameOver();
  }
}

function gameOver() {
  console.log("gameOver");

  // start timer
  document.querySelector("#fyld").classList.remove("timer");

  // gå til endGame når tiden er gået
  document.querySelector("#fyld").removeEventListener("animationend", endGame);

  hideAllScreens();
  document.querySelector("#game_over").classList.remove("hide");

  document.querySelector("#play_again_1").addEventListener("click", startGame);
}

function levelComplete() {
  console.log("levelComplete");

  // start timer
  document.querySelector("#fyld").classList.remove("timer");

  // gå til endGame når tiden er gået
  document.querySelector("#fyld").removeEventListener("animationend", endGame);

  hideAllScreens();
  document.querySelector("#level_complete").classList.remove("hide");

  document.querySelector("#play_again_2").addEventListener("click", startGame);
}

function generateRandomNumber(num) {
  let rndNumber = Math.random();
  rndNumber = rndNumber * num;
  rndNumber = Math.floor(rndNumber);
  rndNumber = rndNumber + 1;

  return rndNumber;

  // return Math.floor(Math.random()*num)+1;
}

function hideAllScreens() {
  document.querySelector("#start").classList.add("hide");
  document.querySelector("#game_over").classList.add("hide");
  document.querySelector("#level_complete").classList.add("hide");
}
