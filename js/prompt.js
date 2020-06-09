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
for (var i=0; i<5; i++) {
        answer = prompt(questions[i][0], "y/n").toLowerCase();
        while (answer !== "y" && answer !== "n"){
                answer = prompt(resubmit).toLowerCase();
                }
                if (answer == "y"){
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

var numGuess = prompt('Guess a number between 1-100.');
var myNum = Math.floor(Math.random() * 100) + 1;

for (var i=0; i<=3; i++){
        if (i<3){
                if (numGuess==myNum){
                        alert(`Correct`);
                        score++;
                        break;
                }
                if (numGuess>myNum){
                        numGuess = prompt('Too large, guess again between 1-100.');
                }
                if (numGuess<myNum){
                        numGuess = prompt('Too small, guess again between 1-100.');
                }
        } else {
                alert(`Too late, the answer is: ` + myNum)
        }
}

var movieList = 'Copy my favorite movie into the answer box: \
A.I. Artificial Intelligence, Contact, \
Grave of the fireflies, The Shawshank Redemption, Kingdom of Heaven: Director\'s Cut, Whiplash, \
The Grand Budapest Hotel, Spirited Away, Man on Wire, Inception';
var ansGuess = prompt(movieList);

for (var i=0; i<=6; i++){
        if (i<6){
                if (ansGuess == 'Grave of the fireflies'){
                        alert(`Correct`)
                        score++;
                        break;
                }   else {
                        alert(`Nope`);
                        ansGuess = prompt(movieList);
        
                }
        } else {
                alert(`Too late, the answer is: Grave of the fireflies`);
        }
}

var endscore = "You, " + name + " scored " + score + "/7 in this pop quiz.";
document.getElementById("endscore").innerHTML = endscore;
