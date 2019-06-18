var counterSP = 0, PCCh = 0, counterSPC = 0;
var scoreCounterPlayer = document.getElementById("scoreCounterPlayer"),
	scoreCounterPC = document.getElementById("scoreCounterPC"),
	playerChoice = document.getElementById("playerChoice"),
	PCChoice = document.getElementById("PCChoice"),
	result = document.getElementById("result");

function clearClasses() {
	playerChoice.classList.remove('rock-color');
	playerChoice.classList.remove('paper-color');
	playerChoice.classList.remove('scissors-color');
	PCChoice.classList.remove('rock-color');
	PCChoice.classList.remove('paper-color');
	PCChoice.classList.remove('scissors-color');
}

function doPlay(play) {
	var min = 1;
	var max = 4;
	PCCh = Math.floor(Math.random() * (+max - +min)) + +min;
	clearClasses();
	if (play==PCCh) {
		if (play==1) {
			playerChoice.innerHTML = "Piedra";
			playerChoice.classList.add('rock-color');
			PCChoice.innerHTML = "Piedra";
			PCChoice.classList.add('rock-color');
		}
		if (play==2) {
			playerChoice.innerHTML = "Papel";
			playerChoice.classList.add('paper-color');
			PCChoice.innerHTML = "Papel";
			PCChoice.classList.add('paper-color');
		}
		if (play==3) {
			playerChoice.innerHTML = "Tijera";
			playerChoice.classList.add('scissors-color');
			PCChoice.innerHTML = "Tijera";
			PCChoice.classList.add('scissors-color');
		}
		result.innerHTML = "Empataste :/";
	}
	if (play==1) {
		playerChoice.innerHTML = "Piedra";
		playerChoice.classList.add('rock-color');
		if (PCCh==2) {
			PCChoice.innerHTML = "Papel";
			PCChoice.classList.add('paper-color');
			result.innerHTML = "Perdiste :(";
			counterSPC = counterSPC+1;
		}
		if (PCCh==3) {
			PCChoice.innerHTML = "Tijera";
			PCChoice.classList.add('scissors-color');
			result.innerHTML = "Ganaste :)";
			counterSP = counterSP+1;
		}
	}
	if (play==2) {
		playerChoice.innerHTML = "Papel";
		playerChoice.classList.add('paper-color');
		if (PCCh==3) {
			PCChoice.innerHTML = "Tijera";
			PCChoice.classList.add('scissors-color');
			result.innerHTML = "Perdiste :(";
			counterSPC = counterSPC+1;
		}
		if (PCCh==1) {
			PCChoice.innerHTML = "Piedra";
			PCChoice.classList.add('rock-color');
			result.innerHTML = "Ganaste :)";
			counterSP = counterSP+1;
		}
	}
	if (play==3) {
		playerChoice.innerHTML = "Tijera";
		playerChoice.classList.add('scissors-color');
		if (PCCh==1) {
			PCChoice.innerHTML = "Piedra";
			PCChoice.classList.add('rock-color');
			result.innerHTML = "Perdiste :(";
			counterSPC = counterSPC+1;
		}
		if (PCCh==2) {
			PCChoice.innerHTML = "Papel";
			PCChoice.classList.add('paper-color');
			result.innerHTML = "Ganaste :)";
			counterSP = counterSP+1;
		}
	}
	scoreCounterPC.innerHTML = counterSPC;
	scoreCounterPlayer.innerHTML = counterSP;
}
