
//Test script file for cardGame











/*function unloadJS(cardObjects) {
var head = document.getElementsByTaggun(‘head’).item(0);
var js = document.getElementById(cardObjects);
js.parentNode.removeChild(js);
}

function unloadAllJS() {
var jsArray = new Array();
jsArray = document.getElementsByTagName(‘script’);
for (i = 0; i < jsArray.length; i++){ if (jsArray[i].id){ unloadJS(jsArray[i].id) }else{ jsArray[i].parentNode.removeChild(jsArray[i]); } } } [/js]
*/
/*function Cards(name,Accuracy,weight){

    this.name = name;
    this.Accuracy = Accuracy;
    this.weight = weight;

}
function yo(){
let name = document.getElementById("name").value;
let name1 = document.getElementById("name");
let Accuracy = document.getElementById("Accuracy").value;
let Accuracy1 = document.getElementById("Accuracy")
let weight = document.getElementById("weight").value;
let weight1 = document.getElementById("weight")

let x = new Cards(name,Accuracy,weight);
console.log(x.name,x.Accuracy,x.weight);
name1.value = "";
Accuracy1.value = "";
weight1.value = "";
}
var sub = document.getElementById("submit");
sub.onclick = yo;
*/

  //this.number = number;

/*

let total = 0;
let s = 0;
let i = 0;
let n = 0;

let values = [2,3,4,5,11];
let suits = ["Spades","Hearts"];
let cards = [];
let deck = [];
let deck1 = [

]





console.log(deck1);
for(i = 0;i < suits.length;i++){
  for(s = 0;s < values.length;s++){
//let x = new Cards(cardSuits[i],cardNumbers[i]);
var x = {card:suits[i],value:values[s]};
deck1.push(x);
}
}
console.log(deck1.length);
for(var j = deck1.length - 1;j > 0;j--){
var rand = [Math.floor(Math.random() * deck1.length)];
[deck1[j], deck1[rand]] = [deck1[rand], deck1[j]];
}

let counter = 0;
function del(){
  let totalId = document.getElementById("total");
  if(counter < 10){
  let y = document.createElement("li");

  y.innerHTML = "<img src='" + deck1[0].card + deck1[0].value + ".png'>";
  document.getElementById("messtype").appendChild(y);
  if(deck1[0].value === 11 && total > 10){
  total += 1;
  totalId.innerHTML = total;
    deck1.splice(0,1);
  console.log(deck1.length);
}else{
  total += deck1[0].value;
  totalId.innerHTML = total;
    deck1.splice(0,1);
  console.log(deck1.length);

}
}counter++;

if(counter > 9){
  var sub = document.getElementById("submit");
sub.disabled = "true";
setTimeout("alert('cards are out!')",1500);
}
console.log("counter = " + counter);
}



let name = document.getElementById("name").value;
let name1 = document.getElementById("name");
let Accuracy = document.getElementById("Accuracy").value;
let Accuracy1 = document.getElementById("Accuracy")
let weight = document.getElementById("weight").value;
let weight1 = document.getElementById("weight")
let dog = {

};

let info =
var sub = document.getElementById("submit");
sub.onclick;



let arr = [
{gun: "Sub Machine Gun",type: {FireRate:650,Accuracy:55 }},
{gun: "Assault Rifle",type: {FireRate:500,Accuracy:76 }},
{gun: "Sniper Rifle",type: {FireRate:70,Accuracy:90 }},
{gun: "Large Machine Gun",type: {FireRate:800,Accuracy:45 }},
{gun: "Shotgun",type: {FireRate:55,Accuracy:50 }},
];

let x = arr.filter(x => {x > 40});

let rand = Math.floor(Math.random() * Math.floor(arr.length));
var sub = document.getElementById("submit");
sub.onclick = function(){arr.push({gun:"Pistol"})};
console.log("Gun: " + arr[rand].gun + " Fire rate: " + arr[rand].type.FireRate + " Accuracy: " + arr[rand].type.Accuracy);

let timer;
let i=0;
let counter = "";
let milSec = "";
let sec = 4;
let min = "";
let x = function(){
  timer = setInterval(function(){
    var minId = document.getElementById("mins");
    var secId = document.getElementById("sec");
    var milSecId = document.getElementById("mil-sec");
    if(milSec <= 8){
      milSec++

      milSecId.innerHTML = milSec;

    }else
    if(sec <= 4){
    milSec = 0;

    milSecId.innerHTML = milSec;
      sec++;
      secId.innerHTML = sec;
    }else{
      milSec = 0;

      milSecId.innerHTML = milSec;
        sec = 0;
        secId.innerHTML = sec;
        min++;
        minId.innerHTML= min;
    }
  }, 1000);
}

let y = function(){
  clearInterval(timer);

}

var sub = document.getElementById("submit");
sub.onclick = x;
var sub1 = document.getElementById("submit1");
sub1.onclick = y;


let x = {

};

let name = document.getElementById("name").value;
let name1 = document.getElementById("name");
let height = document.getElementById("height").value;
let height1 = document.getElementById("height")
let weight = document.getElementById("weight").value;
let weight1 = document.getElementById("weight")

let fun = function (){
let name = document.getElementById("name").value;
let height = document.getElementById("height").value;
let y = x.name = name;
let t = x.height = height;
let li = document.createElement("li");
li.innerHTML = name + " " + height;
document.getElementById('top-ul').appendChild(li);
}
var sub1 = document.getElementById("submit");
sub1.onclick = fun;


function fun(){
let year = document.getElementById("name").value;
let month = document.getElementById("height").value;
let day = document.getElementById("weight").value;

var birthDay = new Date(year,month,day);
var date =  new Date();
var calc = Math.floor((date - birthDay)/(1000 * 60 *60 * 24));
var thisYearBday = new Date(date.getFullYear(),month - 1,day);
var yearsOld = calc / 365;
var monthsOld = calc / 365 * 12;
var nextYear = date.getFullYear();
var nextBday = new Date(nextYear,month - 1,day);
var nextBdayCalc = Math.floor((nextBday - date)/(1000 * 60 * 60 * 24)) + 1;
console.log("Years old: " + yearsOld.toFixed(0) + "\nMonths old: " + monthsOld.toFixed(0) + "\nDays old: " + calc.toFixed(0));
 if(nextBdayCalc < 0){
    nextYear += 1;
    nextBday = new Date(nextYear,month - 1,day);
    nextBdayCalc = Math.floor((nextBday - date)/(1000 * 60 * 60 * 24)) + 1;
   console.log("your nextbday is:" + nextBdayCalc)
 }else{

   console.log("your nextbday is:" + nextBdayCalc);
}
}



var sub1 = document.getElementById("submit");
sub1.onclick = fun;
*/

function addItems(event,item,price){
  var item1 = item.getDataAttribute("data-item-type");
  var price1 = item.getDataAttribute("data-item-type");
  console.log(item1,price1);
}
