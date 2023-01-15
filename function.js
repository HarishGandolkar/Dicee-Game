var player1 = Math.floor(Math.random()*6)+1;
var images = "dice"+player1+".png";
var imgsource = "images/"+images;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",imgsource);

var player2 = Math.floor(Math.random()*6)+1;
var images2 = "dice"+player2+".png";
var imgsource2 = "images/"+images2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",imgsource2);

if(player1>player2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else if(player1<player2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}
else{
    document.querySelector("h1").innerHTML = "Match Draw!";
}