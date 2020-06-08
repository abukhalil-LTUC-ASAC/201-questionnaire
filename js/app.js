'use strict'

var coffee = prompt('Do I drink coffee?', 'y/n').toLowerCase();
var score =0;
while (coffee !== "y" && coffee !== 'n'){
    coffee = prompt('Do I drink coffee?', 'y/n').toLowerCase();
}
if (coffee == "y"){
        alert(`Nope`)
}   else {
        alert(`Correct! I hate coffee, unless I'm tired.`);
        score++;
}

var mansaf = prompt('What about eating Mansaf?', 'y/n').toLowerCase();
while (mansaf !== "y" && mansaf !== "n"){
    mansaf = prompt('What about eating Mansaf?', 'y/n').toLowerCase();
}
if (mansaf.toLowerCase() === "y"){
        alert(`Correct! I love mansaf, even if it makes me tired.`)
        score++;
}   else {
        alert(`Nope`)
}

var books = prompt('Reading books?', 'y/n').toLowerCase();
while (books !== "y" && books !== "n"){
    books = prompt('Reading books?', 'y/n').toLowerCase();
}
if (books.toLowerCase() === "y"){
        alert(`Correct! I like reading technical books, only when I am not tired.`)
        score++;
}   else {
        alert(`Nope`)
}

var hiking = prompt('Hiking perhaps?', 'y/n').toLowerCase();
while (hiking !== "y" && hiking !== "n"){
    hiking = prompt('Hiking perhaps?', 'y/n').toLowerCase();
}
if (hiking.toLowerCase() === "y"){
        alert(`Correct! I love hiking, and having different perspectives of a view.`)
        score++;
}   else {
        alert(`Nope`)
}

var coding = prompt('Do I like coding', 'y/n').toLowerCase();
while (coding !== "y" && coding !== "n"){
    coding = prompt('Do I like coding', 'y/n').toLowerCase();
}
if (coding.toLowerCase() === "y"){
        alert(`Nope`)
}   else {
        alert(`Correct! I don't \"like\" coding, but I love building stuff!`)
        score++;
}

var endscore = "You, " + name + " scored " + score + "/5 in this pop quiz.";
document.getElementById("endscore").innerHTML = endscore;

