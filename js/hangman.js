document.addEventListener('DOMContentLoaded', () => {
	
	function shuffle(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	}

	var i,
		alphabet, 
		newAlphabet,
		letters, 
		letter,
		themeId,
		themeText, 
		theWord;

	var space = "_",
		hiddenWord = "",
		count = 0,
		fail = 0,
		alphabetArray = [], 
		hiddenWordSplit = [],
		theWordSplit = [];

	var themes = document.querySelectorAll(".theme");
	var	wordDisplayed = document.getElementById("word_display");
	var	keybordDisplay = document.getElementById("keybord");
	var	resultDisplay = document.getElementById("result_display");
	var	themeButton = document.querySelector(".choose_theme");
	var	themeDisplay = document.getElementById("theme_display");
	var	newGameButton = document.querySelector(".new_game");

	var guessWord = 
		[{ 	theme: "Body",
			word: ["Head","Neck","Hands","Eye"]   },
                  {	theme: "Fruit",
			word: ["Pineapple", "Strawberry", "Watermelon", "Blackberry"]  },
                  {	theme: "Color",
			word: ["Pink","Orange","Red","Violet"]}
                 ];

	window.onload = function(){
		themes.forEach(theme => theme.addEventListener("click", startGame));
		newGameButton.style.display = "none";
		keybordDisplay.style.display = "none";
		themeDisplay.style.display = "none";
	};

	
	function startGame(){
		newGameButton.style.display = "inline";
		themeDisplay.style.display = "inline";
		themeId = this.getAttribute("value");
		themeText = this.innerHTML;
		themeDisplay.innerHTML += "Theme: "+ themeText;
		shuffle(guessWord[themeId].word);
		theWord = guessWord[themeId].word[0].toUpperCase();
		displayWord();
	};

	
	function displayWord() {
		themeButton.style.display = "none";
		keybordDisplay.style.display = "block";
		theWordSplit = theWord.split("");
		for (i = 1; i <= theWord.length; i++){
			hiddenWord = hiddenWord + space;
		}
		hiddenWordSplit = hiddenWord.split("");
		for (i = 0; i < theWordSplit.length; i++) {
			if (theWordSplit[i] === " ") {
				theWordSplit[i] = "&nbsp;";
				hiddenWordSplit[i] = "&nbsp;";
				count++;
			}
		}
		wordDisplayed.innerHTML = hiddenWordSplit.join("&#160;");
	}

	
	function keyboard(){
		alphabet = "azertyuiopqsdfghjklmwxcvbn ";
		newAlphabet = alphabet.toUpperCase();
		alphabetArray = newAlphabet.split('');
		for (i = 0; i < alphabetArray.length-1; i++) {
			if (alphabetArray[i] == " ") {
				alphabetArray[i] = "&nbsp;";
			}
			keybordDisplay.innerHTML += '<button type="button" class="letter">' 
				+ alphabetArray[i] + "</button>";
			if (i == 9 || i == 19) {
				keybordDisplay.innerHTML += "<br>";
			}	
		}
		letters = document.querySelectorAll(".letter");
		letters.forEach(letter => letter.addEventListener("click", pressedKey));
	}
	keyboard();

	
	function pressedKey(){
		letter = this.innerHTML;
		this.setAttribute("disabled", "");
		checkMatch();
	}

	
	function checkMatch() {
		if (theWordSplit.indexOf(letter) == -1) {
			fail++;
			drawHangman();
			if (fail == 6) {
				resultDisplay.innerHTML = "<span style='color: orange;'>> Game over!</span>";
				endGame();
			}
		}
		for (i = 0; i < theWord.length; i++) {
			if (theWordSplit[i] === letter) {
				count++;
				hiddenWordSplit[i] = letter; 
			} 
			wordDisplayed.innerHTML = hiddenWordSplit.join("&#160;");
		}
		if (count === theWord.length) {
			resultDisplay.innerHTML = "<span style='color: greenyellow;'>> You win!</span>";
			endGame();
		}
	}
	
	
	function drawHangman(){
		switch (fail) {
			case 0:
				document.querySelector(".deadguy.head").style.visibility = "hidden";
				document.querySelector(".deadguy.body").style.visibility = "hidden";
				document.querySelector(".deadguy.right-arm").style.visibility = "hidden";
				document.querySelector(".deadguy.left-arm").style.visibility = "hidden";
				document.querySelector(".deadguy.left-leg").style.visibility = "hidden";
				document.querySelector(".deadguy.right-leg").style.visibility = "hidden";
				break;
			case 1: document.querySelector(".deadguy.head").style.visibility = "visible";
				break;
			case 2: document.querySelector(".deadguy.body").style.visibility = "visible";
				break;
			case 3: document.querySelector(".deadguy.right-arm").style.visibility = "visible";
				break;
			case 4: document.querySelector(".deadguy.left-arm").style.visibility = "visible";
				break;
			case 5: document.querySelector(".deadguy.left-leg").style.visibility = "visible";
				break;
			case 6: document.querySelector(".deadguy.right-leg").style.visibility = "visible";
				break;
			default:
				break;
		}
	}
	drawHangman();

	
	function endGame(){
		newGameButton.style.display = "inline";
		letters.forEach(letter => letter.removeEventListener("click", pressedKey));
	}
	
	
	newGameButton.addEventListener("click", newGame);
	function newGame(){
		fail = 0;
		count = 0;
		theWordSplit = [];
		hiddenWordSplit = [];
		wordDisplayed.innerHTML = "";
		resultDisplay.innerHTML = "";
		themeDisplay.innerHTML = "";
		space = "_";
		hiddenWord = "";
		themeButton.style.display = "block";
		keybordDisplay.style.display = "none";
		newGameButton.style.display = "none";
		letters.forEach(function(letter){letter.removeAttribute("disabled", "")});
		letters.forEach(letter => letter.addEventListener("click", pressedKey));
		drawHangman();
	}
});