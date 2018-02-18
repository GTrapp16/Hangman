//I believe I have some sort of undefined variable dealing with the word letter and plan to fix this in the future but have to turn in what I have before going back to work! cheers!
//would like to restart from scratch using the knowledge of scope of functions learned in todays saturday class 




//create variables
var wins123=0;
var losses123=0;
var guesses=0;

var words  = ["guitar", "skateboard", "ocean", "rattlensnake","antidisestablishmentarianism"];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var wordChosen="";
var lettersChosen="";
var blanks=0;
var lettersWrong=[];
//tell where to put answers in html
var wins=document.getElementById("wins");
var correctWord=document.getElementById('word');
var numbers=document.getElementById("numbers");
var letters=document.getElementById("letters");
var letter="";


//building the start game function
//chooses a random word and displays the number of blanks as well as how many guesses remain
function commenceGame(){
    wordChosen=words[Math.floor(Math.random()*words.length)];
    correctWord=words.indexOf(wordChosen);
    lettersChosen=wordChosen.split("");
    blanks=lettersChosen.length;

    guesses=6;
    lettersWrong=[];
    nayYay=[];

    for (var i=0;i<blanks; i++) {
        nayYay.push("_");
    }
    //written onto our html page
    correctWord.innerHTML=nayYay.join(" ");
    numbers.innerHTML=guesses;
    letters.innerHTML=lettersWrong;
//tests to make sure things are working
    console.log(wordChosen);
    console.log(lettersChosen);
    console.log(blanks);
    console.log(nayYay);
    console.log(letters);
    console.log(letter);
};
//calling on the start game function
commenceGame();
//building the function to determing if a letter is in our word or not 
function letterCheck(letter) {
    var isThisCorrect = false;

    for (var i=0; i< blanks;i++) {
        if (wordChosen[i]===letter) {
            isThisCorrect=true;
        }
    }
    if(isThisCorrect) {
        for (i=0; i< blanks; i++) {
            if (wordChosen[i]===letter) {
                nayYay[i]=letter;
            }
        }
    }
    else {
        lettersWrong.push(letter);
        guesses--;
    }
}
//building the function to get the conditional win to restart the game or lose and restart the game
function Win(){
    if(lettersChosen.toString()==nayYay.tostring()) {
        wins123++;
        alert("BOOM YOU WIN!");
        wins.innerHTML=wins123;
        commenceGame();
    }
    else if (guesses===0) {
        alert("You've been strung up.");
        
        commenceGame();
    }
}

//the computer takes in a users input and makes sure it is vaild and will push it through letter check function 
document.onkeyup = function(event) {
	isLetter= false;
	letter = String.fromCharCode(event.keyCode).toLowerCase();
	for (var i=0; i < letters.length; i++) {
		if (letter === letters[i]) {
			isLetter = true;
		}
	}
	if (isLetter) {
		letterCheck(letter);
		letters.innerHTML = lettersWrong;
		correctWord.innerHTML = nayYay.join(" ");
		Win();
	}
}
