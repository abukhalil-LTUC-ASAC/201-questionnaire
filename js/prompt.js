
'use strict'


var score =0;
var resubmit = 'Answer only with y/n!';
var answer;
var questions = [
        ['Do I drink coffee', 'Nope.', 'Correct! I hate coffee, unless I\'m tired.'],
        ['What about eating Mansaf?', 'Correct! I love mansaf, even if it makes me tired.', 'Nope.'],
        ['Reading books?', 'Correct! I like reading technical books, only when I am not tired.','Nope.'],
        ['Hiking perhaps?', 'Correct! I love hiking, and having different perspectives of a view.', 'Nope.'],
        ['Do I like coding', 'Nope.', 'Correct! I don\'t \"like\" coding, but I love building stuff!.']
];
var movieList = 'Guess my favorite movie name or number into the answer:\n1. A.I. Artificial Intelligence\n2. Contact\n\
3. Grave of the fireflies\n4. The Shawshank Redemption\n5. Kingdom of Heaven: Director\'s Cut\n6. Whiplash\n\
7. The Grand Budapest Hotel\n8. Spirited Away\n9. Man on Wire\n10. Inception';


function myName() {
        var name = prompt('So, what should I call you', 'Harry Potter');
        var txt = "Hello! " + name + ". How much do you know about me?";
        document.getElementById("name").innerHTML = txt;
}

function askMe() {
        for (var i=0; i<5; i++) {
                answer = prompt(questions[i][0], "y/n").toLowerCase();
                while (answer !== "y" && answer !== "n" && answer !== "yes" && answer !== "no"){
                        answer = prompt(resubmit + "\n" + questions[i][0]).toLowerCase();
                }
                if (answer == "y" || answer == "yes"){
                        alert(questions[i][1]);
                        if(!(questions[i][1]=="Nope.")){
                                score++;
                        }
                }   else {
                        alert(questions[i][2]);
                        if(!(questions[i][2]=="Nope.")){
                                score++;
                        }
                }
        }
}

function guessNum() {
        var numGuess = prompt('Here is a fun game!\nGuess a number between 1-100 at most 8 times and try to almost halve or double the guess each time.\nYou will always get this right.');
        var myNum = Math.floor(Math.random() * 100) + 1;
        var numGuessString = '';
        for (var i=0; i<=7; i++){
                if (i<7){
                        if (numGuess==myNum){
                                alert(`Correct`);
                                score++;
                                break;
                        }
                        if (numGuess>myNum){
                                numGuessString += numGuess + '  '
                                numGuess = prompt('Too large, guess again between 1-100. Last answers: ' + numGuessString);
                        }
                        if (numGuess<myNum){
                                numGuessString += numGuess + '  '
                                numGuess = prompt('Too small, guess again between 1-100. Last answers: ' + numGuessString);
                        }
                } else {
                        alert(`Too late, the answer is: ` + myNum)
                }
}

}
function guessMovie() {
        var ansGuess = prompt(movieList).toLowerCase();
        var ansValue = 'shawshank redemption';
        for (var i=0; i<=6; i++){
                if (i<6){
                        if (ansValue.includes(ansGuess)|| ansGuess == 4 ){
                                alert(`Correct`)
                                score++;
                                break;
                        }   else {
                                alert(`Nope`);
                                ansGuess = prompt(movieList);
                        }
                } else {
                        alert(`Too late, the answer is: The Shawshank Redemption`);
                }
        }
}

function myScore() {
        var btn = document.createElement("BUTTON");
        btn.innerHTML = "Click to restart!";
        var endscore = "You, " + name + " scored " + score + "/7 in this pop quiz.<br><br>";
        document.getElementById('endscore').innerHTML = '';
        document.getElementById("endscore").innerHTML = endscore;
        document.getElementById('endscore').appendChild(btn);
}

function startQuiz() {
        myName();
        askMe();
        guessNum();
        guessMovie();
        myScore();
}