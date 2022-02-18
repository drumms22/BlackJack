let li = document.getElementsByTagName("li");
let playerTotal = 0;
let dealerTotal = 0;
let playerWinTotal = 0;
let dealerWinTotal = 0;
let x;
let timer;
let i = 0;
let values = [2,3,4,5,6,7,8,9,10,11];
let suits = ["Spades","Hearts","Diamonds","Clubs"];
let royalCards = ["jh","qh","kh","js","qs","ks","jd","qd","kd","jc","qc","kc"];
let royalCardValue = [10];
let deck1 = [];
let margin = 0;
let dealMargin = 0;
let randDealer = "Dealer";

//Function to hide main screen and show card table--------
function next(){
  let top = document.getElementById("top");
  let cont = document.getElementById("content");
  let btn = document.getElementById("play");
  if(!top.style.display || top.style.display === "flex"){
    top.style.display = "none";
    cont.style.display = "flex";
      cardShuffle();
  }else{
    top.style.display = "flex";
    cont.style.display = "none";

  }
}

function audio(){
  let audio = document.getElementById("audioFile");
  audio.play();
  cardShuffle();
}
//create random deck-------------
function cardShuffle(){


for(let t = 0;t < suits.length;t++){
  for(s = 0;s < values.length;s++){
let cardObject = {card:suits[t],value:values[s]};
deck1.push(cardObject);
}
}

for(let royal = 0; royal < royalCards.length; royal++){
  for(let u = 0; u < royalCardValue.length; u++){
let newCardObject = {card:royalCards[royal],value:royalCardValue[u]};
deck1.push(newCardObject);
}
}

for(let j = deck1.length - 1;j > 0;j--){
let rand = [Math.floor(Math.random() * deck1.length)];
[deck1[j], deck1[rand]] = [deck1[rand], deck1[j]];
}
let message = document.getElementById("top-message");
  message.innerHTML = "Get ready for your cards!";
  setTimeout(function(){
    let  caption =  document.getElementById("hitcard-caption");
    caption.textContent = "Dealer is dealing the cards...";
    setTimeout(play,3000);
  },1500);
}


//Function to deal first 2 cards----------------

function play(){
  let playerTotalId = document.getElementById("player-total");
  let message = document.getElementById("top-message");
  let dealerTotalId = document.getElementById("dealer-total");
  let pic = document.querySelector(".pic");
  let li = document.createElement("li");
  let deal_li = document.createElement("li");
  let  hitCard =  document.getElementById("hitCard")


    //Players first 2 cards---------------

    if(deck1.length < 2){
      x = "The cards are out!";
      document.getElementById("hitCard").innerHTML = "";
      document.getElementById("stay-btn").innerHTML ="";
      calcWinner(x);
    }else{
      if(i < 2){
        timer = setTimeout(play, 1000);
        console.log(margin);
  		    li.innerHTML = "<img class='pic' src='images/" + deck1[0].card + deck1[0].value + ".png' style='margin-top:" + margin + "px'>";
          document.getElementById("playerCards").appendChild(li);
          let newMargin = margin += 25;
          if(deck1[0].value === 11 && playerTotal > 10){
            playerTotal += 1;
            deck1.splice(0, 1);
            playerTotalId.innerHTML = playerTotal;
          }else{
            playerTotal += deck1[0].value;
            deck1.splice(0, 1);
            playerTotalId.innerHTML = playerTotal;
          }

          console.log(margin);

    //Dealers first 2 cards----------------------

           if(deck1.length === 0){
                x = "The cards are out!";
                document.getElementById("stay-btn").innerHTML ="";
                document.getElementById("hitCard").innerHTML = "";
                calcWinner(x);
                return false;
              }else{
                deal_li.innerHTML =  "<img class='pic' src='images/" + deck1[0].card + deck1[0].value + ".png' style='margin-top:" + dealMargin + "px'>";
      		      document.getElementById("dealerCards").appendChild(deal_li);
                let newDealMargin = dealMargin += 25;
              if(deck1[0].value === 11 && dealerTotal > 10){
                dealerTotal += 1;
                deck1.splice(0, 1);
                dealerTotalId.innerHTML = dealerTotal;
              }else{
                dealerTotal += deck1[0].value;
                deck1.splice(0, 1);
                dealerTotalId.innerHTML = dealerTotal;
                }
            }
          }i++;

          //Check player and dealer totals---------------

                if(dealerTotal === 21){
                  x = "<p>" + randDealer + " has hit 21!</p><p>You lost!";
      			      clear(x);
                }else{
                    if(i > 1 && playerTotal < 22 && dealerTotal < 22){
      				        let  btn =  document.getElementById("play");
                      let  hitCard =  document.getElementById("hitCard");
                      let  caption =  document.getElementById("hitcard-caption");
                      document.getElementById("stay-btn").innerHTML ="<p  class='stayBtn' onclick='stay()'>Stay!</p>";
                      hitCard.innerHTML = "<img src='images/card.jpg' alt='Smiley face' class='mid-cards' id='hit' onclick='playerHit()' style='display: block;margin: 0 auto;'>";
                      message.innerHTML = "Now time to hit or stay!";
                      caption.textContent= "Hit!";
                      clearTimeout(timer);
                    }
                  }
                }
              }





//Player hit function--------------------

function playerHit(){
  let playerTotalId = document.getElementById("player-total");
  let list = document.createElement("li");
  let message = document.getElementById("top-message");
  let hitCard = document.getElementById("hitCard");
  let  caption =  document.getElementById("hitcard-caption");
  let hitBtn =  document.getElementById("hit");

  if(deck1.length === 0){
      x = "The cards are out!";
      document.getElementById("hitCard").innerHTML = "";
      document.getElementById("stay-btn").innerHTML ="";
      calcWinner(x);
      return false;
    }else{
      if(playerTotal < 22){
         list.innerHTML = "<img class='pic' src='images/" + deck1[0].card + deck1[0].value + ".png' style='margin-top:" + margin + "px'>";
          document.getElementById("playerCards").appendChild(list);
          let newMargin = margin += 25;
        if(deck1[0].value === 11 && playerTotal > 10){
            playerTotal += 1;
            deck1.splice(0, 1);
            playerTotalId.innerHTML = playerTotal;
          }else{
            playerTotal += deck1[0].value;
            deck1.splice(0, 1);
            playerTotalId.innerHTML = playerTotal;

          }

            if(playerTotal > 21){
              x = "<p>You have went over 21!</p><p>You lose!</p>";
              document.getElementById("stay-btn").innerHTML ="";
              caption.textContent = "Next hand!";
              hitCard.innerHTML = "<img src='images/card.jpg' class='mid-cards' id='hit'  style='display: block;margin: 0 auto;'>";
              clear(x);
            }
         }i++;
      }
    }

//Stay button function---------------

function stay(){
  let hitCard =  document.getElementById("hitCard");
  let  caption =  document.getElementById("hitcard-caption");
  let message = document.getElementById("top-message");
  message.innerHTML = "Dealers turn!";
  caption.textContent = "Dealer is hitting!";
  hitCard.innerHTML = "<img src='images/card.jpg' class='mid-cards' id='hit'  style='display: block;margin: 0 auto;'>";
  document.getElementById("stay-btn").innerHTML ="";
  setTimeout(dealerHit,750 );
}

//Dealer auto hit function-----------------------

function dealerHit(){
  i = 2;
  let dealerTotalId = document.getElementById("dealer-total");
  let lit = document.createElement("li");
  let hitCard = document.getElementById("hitCard");
  let popUp = document.getElementById('top-message');
  let  caption =  document.getElementById("hitcard-caption");
    if(deck1.length === 0){
        x = "The cards are out!";
        document.getElementById("hitCard").innerHTML = "";
        document.getElementById("stay-btn").innerHTML ="";
        calcWinner(x);
        return false;
      }else
        if(dealerTotal === 21){
           x = "<p>" + randDealer + " has hit 21!</p><p>You lose!";
           caption.textContent = "Next hand!"
           clear(x);
        }else
            if(dealerTotal >= playerTotal && dealerTotal < 22){
             x = "<p>" + randDealer + " has stayed!</p><p>You lose!</p>";
             caption.textContent = "Next hand!"
             clear(x);
          }else
          if(dealerTotal > 21){

           x = "<p>" + randDealer + " has went over 21!</p><p>You win!</p>";
           caption.textContent = "Next hand!";
           clear(x);
         }
        if(dealerTotal < playerTotal && dealerTotal < 21){
            timer = setTimeout(dealerHit,1000);
            lit.innerHTML = "<img class='pic' src='images/" + deck1[0].card + deck1[0].value + ".png' style='margin-top:" + dealMargin + "px'>";
            document.getElementById("dealerCards").appendChild(lit);
            let newDealMargin = dealMargin += 25;
          if(deck1[0].value === 11 && dealerTotal > 10){
            dealerTotal += 1;
            deck1.splice(0, 1);
            dealerTotalId.innerHTML = dealerTotal;
          }else{
            dealerTotal += deck1[0].value;
            deck1.splice(0, 1);
            dealerTotalId.innerHTML = dealerTotal;
          }i++;

          }
}



//Calculate total win scores at the end of the game and determine winner---------------------

function calcWinner(x){
	let popUp = document.getElementById("popup");
  let  caption =  document.getElementById("hitcard-caption");
    caption.textContent = x;
    clearTimeout(timer);
    setTimeout(function (){
    if(playerWinTotal > dealerWinTotal){
		popUp.innerHTML = "<div id='pop'><p>You have defeated " + randDealer + "!</p><p>Play another round!</p><p onclick ='playAgain()' class='popBtn'>Play again!</p></div>";
    }else{
		popUp.innerHTML = "<div id='pop'><p>" + randDealer + " has defeated you!</p><p>Play another round!</p><p onclick ='playAgain()' class='popBtn'>Play again!</p></div>";
    }
  },2000);
}


//Funtion to start the next hand--------

function nextHand(){
	playerTotal = 0;
	dealerTotal = 0;
  i=0;
	let parent = document.getElementById("playerCards");
	let parent2 = document.getElementById("dealerCards");
	let yo = document.getElementById("hitCard");
  let hitCard =  document.getElementById("hit");
	let message = document.getElementById("top-message");
	let playerTotalId = document.getElementById("player-total");
	let dealerTotalId = document.getElementById("dealer-total");
  let popUp = document.getElementById("popup");
	playerTotalId.innerHTML = playerTotal;
	dealerTotalId.innerHTML = dealerTotal;
  popUp.innerHTML = "";
	message.innerHTML = "Get ready for your cards!";

//Delete cards on both tables-------
	while(parent.hasChildNodes()){
  parent.removeChild(parent.firstChild);
 };
  while(parent2.hasChildNodes()){
  parent2.removeChild(parent2.firstChild);
  }
  margin = 0;
  dealMargin = 0;
	yo.innerHTML = '<img src="images/card.jpg" alt="Smiley face" class="mid-cards" id="play"  style="display: block;margin: 0 auto;">';
  setTimeout(function(){
    let  caption =  document.getElementById("hitcard-caption");
    caption.textContent = "Dealer is dealing the cards...";
    setTimeout(play,2000);
  },1000);
}




//Function to calculate score totals to determine winner of hand----------

function handOver(x){
  let  caption =  document.getElementById("hitcard-caption");
  let  playerWinTotalId =  document.getElementById("player-win-total");
  let  dealerWinTotalId =  document.getElementById("dealer-win-total");
  let popUp = document.getElementById("popup");
  let message = document.getElementById("top-message");

  if(dealerTotal >= playerTotal && dealerTotal < 22){
      message.innerHTML = "";
      popUp.innerHTML = "<div id='pop'>" + x + "<p>Play next hand!</p><p onclick ='nextHand()' class='popBtn'>Next hand!</p></div>";
      dealerWinTotal += 1;
      dealerWinTotalId.innerHTML = dealerWinTotal;
      }else
          if(dealerTotal < playerTotal && playerTotal < 22){
              message.innerHTML = "";
              popUp.innerHTML = "<div id='pop'>" + x + "<p>Play next hand!</p><p onclick ='nextHand()' class='popBtn'>Next hand!</p></div>";
              playerWinTotal += 1;
              playerWinTotalId.innerHTML = playerWinTotal;
              }else
                  if(dealerTotal > 21){
                        message.innerHTML = "";
                        popUp.innerHTML = "<div id='pop'>" + x + "<p>Play next hand!</p><p onclick ='nextHand()' class='popBtn'>Next hand!</p></div>";
                        playerWinTotal += 1;
                        playerWinTotalId.innerHTML = playerWinTotal;
                      }else
                          if(playerTotal > 21){
                            message.innerHTML = "";
                            popUp.innerHTML = "<div id='pop'>" + x + "<p>Play next hand!</p><p onclick ='nextHand()' class='popBtn'>Next hand!</p></div>";
                            //caption.style.display = "none";

                            dealerWinTotal += 1;
                            dealerWinTotalId.innerHTML = dealerWinTotal;
                          }
                        }


//Function to clear timer setTimeout---------

function clear(x){
  clearTimeout(timer);
  setTimeout(function (){
  handOver(x);
},1000);
}

function playAgain(){
  let popUp = document.getElementById("popup");
  let playerWinTotalId =  document.getElementById("player-win-total");
  let dealerWinTotalId =  document.getElementById("dealer-win-total");
  let parent = document.getElementById("playerCards");
	let parent2 = document.getElementById("dealerCards");
	let yo = document.getElementById("hitCard");
  let hitCption = document.getElementById("hitcard-caption");
  let playerTotalId = document.getElementById("player-total");
	let dealerTotalId = document.getElementById("dealer-total");
  playerTotal = 0;
  dealerTotal = 0;
  playerWinTotal = 0;
  dealerWinTotal = 0;
  i = 0;
  deck1 = [];
  popUp.innerHTML = "";
  playerTotalId.innerHTML = "0";
  dealerTotalId.innerHTML = "0";
  playerWinTotalId.innerHTML = "0";
  dealerWinTotalId.innerHTML = "0";
  yo.innerHTML = '<img src="images/card.jpg" alt="Smiley face" class="mid-cards" id="play"  style="display: block;margin: 0 auto;">';
  //Delete cards on both tables-------
	while(parent.hasChildNodes()){
  parent.removeChild(parent.firstChild);
 };
  while(parent2.hasChildNodes()){
  parent2.removeChild(parent2.firstChild);
 };
   margin = 0;
   dealMargin = 0;
  cardShuffle();
}
