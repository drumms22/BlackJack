//Original script for cardGame



//starting button switch
function next(){
var resume = document.getElementById("top");
var stop = document.getElementById("content");
var btn = document.getElementById("play");
if(!stop.style.display || stop.style.display === "block"){
  stop.style.display = "none";
  resume.style.display = "block";

}else{
  stop.style.display = "block";
  resume.style.display = "none";
  pickDealer();
}
}



function pickDealer(){
  let dealerName = document.querySelector("#dealer-name");

  //get an enemy
  let dealer = ["Max","Henry","Bob","Chris"];
  let chooseRandom = Math.floor(Math.random() * Math.floor(4));
  let randDealer= dealer[chooseRandom];

  dealerName.innerHTML= randDealer + "\'s";
  alert("You are playing " + randDealer);
}

var spades1 = '<img src="ace.png" value="1" class="pic" >';
var spades2 =  '<img src="spades2.jpeg" value="2" class="pic" >';
var spades3 = '<img src="spades3.png" value="3" class="pic" >';
var spades4 =  '<img src="spades4.png" value="4" class="pic" >';
var spades5 =  '<img src="spades5.png" value="5" class="pic" >';
var spades6 =  '<img src="spades6.png" value="5" class="pic" >';
var spades7 =  '<img src="spades7.png" value="5" class="pic" >';
var spades8 =  '<img src="spades8.png" value="5" class="pic" >';
var spades9 =  '<img src="spades9.png" value="5" class="pic" >';
var spades10 =  '<img src="spades10.png" value="5" class="pic" >';



//Calculations for the player and dealer from "li" 1 - 3;
var i = 1;
var l = 1;
var x = "";
var y = "";
let pics = [spades1,spades2,spades3,spades4,spades5,spades6,spades7,spades8,spades9,spades10];
let pics = [
{card: spades1,value: 1},
{card: spades2,value: 2},
{card: spades3,value: 3},
{card: spades4,value: 4},
{card: spades5,value: 5},
{card: spades6,value: 6},
{card: spades7,value: 7},
{card: spades8,value: 8},

]//Player cards
let pics2 = [spades1,spades2,spades3,spades4,spades5,spades6,spades7,spades8,spades9,spades10];//dealer cards
//player numbers
let cardNumbers2 = [1,2,3,4,5,6,7,8,9,10];//dealer numbers
let playerScore = [];
let oppScore = [];
console.log(playerScore);
function play(){
  let p = document.getElementById("total").textContent;
  let t = document.getElementById("total-1").textContent;
  if(p > 20 && p < 22){
  let  won = "You hit 21!";
      gameWon(won);
      }else
        if(p > 21){
          let over = "You have went over 21! \n You have lost!";
          gameOver(over);

        }else
          if(t > 21){
            let over = "The dealer went over 21! \n You have won!";
              gameOver(over);

          }
            if(t > 20 && t < 22){
                let  won = "Dealer hit 21! \n You have lost!";
                gameWon(won);

                }else
                  if(i < 4){


                    let resume = document.getElementById("top");
                    let stop = document.getElementById("content");
                    var rand = [Math.floor(Math.random() * pics.length)];
                    let cards = cardNumbers[randomNumber];
                    let pict = pics[randomNumber];
                       x = "card" + i;
                      document.getElementById(x).innerHTML = pics;
                      pics.splice(rand, 1);
                    i++;


                    let cards2 = cardNumbers2[rand];
                    let pict2 = pics2[rand];
                     y = "deal" + l;
                    document.getElementById(y).innerHTML = pict2;
                    cardNumbers2.splice(rand, 1);
                    pics2.splice(rand, 1);
                    l++;
                    add(cards, cards2);

                  }else if(p < 21 && t < 21){
                          let  btn =  document.getElementById("play");
                          let  hitBtn =  document.getElementById("hit");
                          let  caption =  document.getElementById("hitcard-caption");
                          alert("Now time to hit or stay!");
                          document.getElementById("stay-btn").innerHTML ="<button  onclick='stay()'>Stay!</button>";
                          btn.style.display = "none";
                          hitBtn.style.display = "block";
                          caption.textContent= "Hit!";
                          caption.style.marginLeft = " 2.2%";
                        }
                      }










//Player Hit totals
function playerHit(){
        let p = document.getElementById("total").textContent;
          var randomNumber = [Math.floor(Math.random() * cardNumbers.length)];
         n = cardNumbers[randomNumber];
         let pict = pics[randomNumber];
          x = "card" + i;
          if(p > 20 && p < 22){
            let won = "You have hit 21! \n You have won!";
            gameWon(won);
          }else if(i > 5){
            stay();
          }

            if(p < 22){
            document.getElementById(x).innerHTML = pict;
           cardNumbers.splice(randomNumber, 1);
           pics.splice[randomNumber, 1];
           console.log("score= " + playerScore);
           i++;
           playerHitTotal(n);

            }else{
              let over = "You have went over 21! \n You have lost!" ;
            gameOver(over);
            window.location.reload();
            }
}


function playerHitCount(n,total1){
  return n + total1;
}

function playerHitTotal(n){
  playerScore.push(n);
  sum2();
}

function sum2(){
    let x = document.getElementById("total").textContent;
    let playerSum = playerScore.reduce(playerHitCount);
    document.getElementById("total").innerHTML = playerSum;
}












// Dealers auto hitting functions!

function dealerHitCount(m,total2){
  return m + total2;
}

function dealerHitTotal(m){
  oppScore.push(m);
  sum3();
}

function sum3(){
  let x = document.getElementById("total-1").textContent;
  let dealerSum = oppScore.reduce(dealerHitCount);

    document.getElementById("total-1").innerHTML = dealerSum;
}


var arr = [16,17,18];
var time;
function stay(){
  let player = document.getElementById("total-1").textContent;
  let p = document.getElementById("total-1").textContent;
    var randomNumber = [Math.floor(Math.random() * cardNumbers2.length)];
    var rand = [Math.floor(Math.random() * arr.length)];
    var array = arr[rand];
    m = cardNumbers2[randomNumber];
    var pict2 = pics2[randomNumber];
    x = "deal" + l;
        if(i > 6){
            clearTimeout(time);
            addBothTotal();
          } else
          if(p >= array && p <= array + 2 || p < 21 && p > 19){
            clearTimeout(time);
            alert("The dealer has stayed!");
            addBothTotal();
          }else
          if(p > 20 && p < 22){
            let won = "The dealer has 21! \n The dealer as won!";
            clearTimeout(time);
            gameWon(won);
            window.location.reload();

          }else
          if(p > 21){
            let over = "The dealer went over 21! \n You have won!";
            clearTimeout(time);
            gameOver(over);
          window.location.reload();
          } else
            if(p < 22){

          document.getElementById(x).innerHTML = pict2;
         cardNumbers2.splice(randomNumber, 1);
         pics2.splice(randomNumber, 1);
         console.log("score= " + playerScore);
         l++;

         dealerHitTotal(m);
      time = setInterval(stay, 2000);
}
}







//WHo won and lost
function gameWon(won){
  alert(won);
  window.location.reload();
}
function gameOver(over){
  alert(over);
  window.location.reload();
}





// adding of the first 3 deals!
function sumAddPlayer(cards, total){
  return cards  + total;
}

function sumAddOpp(cards2, total1){
  return cards2 + total1;
}

function add(cards, cards2){
  playerScore.push(cards);
  oppScore.push(cards2);
  console.log("player" + playerScore);
  console.log("opp" + oppScore);
  sum();
}

function sum(){
  let playerSum = playerScore.reduce(sumAddPlayer);
  let oppSum = oppScore.reduce(sumAddOpp);
  document.getElementById("total").innerHTML = playerSum;
  document.getElementById("total-1").innerHTML = oppSum;
}

function gameTotal(){
    let x = document.getElementById("total").textContent;
    let y = document.getElementById("total-1").textContent;
      if(x > y){
        alert("you win!");
          window.location.reload();
      }else{
        alert("you lose!");
          window.location.reload();
      }
}



//Adding both together to see who wins
function addBothTotal(){
  let x = document.getElementById("total").textContent;
  let y = document.getElementById("total-1").textContent;
  let score = parseInt(document.getElementById("score-counter").textContent) + 1;
    if(x <= y){
      alert("The dealer has won!");
      window.location.reload();
    }else{
      alert("You have won!" + score);


    }
}
