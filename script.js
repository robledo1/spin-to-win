// spin to win 
//a variable to keep track of coins of both players

// let you spin
//deterine if win loss or tie
// a variable to switch players after turn
// 

let player1coins = 10;
let player2coins = 10;
let userResult
let winType = ["Win 2 coins", "Put in 2 coins", "Win 1 coin" , "Put in 1 coin", "Win pot!", "All put 1 coin"];
let pot = 0;
let currentPlayer = "player1"




const element = document.getElementById("spinButton");

txt1= document.getElementById("coinInput1")
txt2= document.getElementById("coinInput2")
coinsInPot = document.getElementById("coinsInPot")


coinsRemain1= document.getElementById("daCoins1")




/*
player1=10
player2=10
 Round 1:
  player 1: put 2 coins
  player 2: put 2 coins
  player1=8
  player2=8
  pot has 4 coins

  player 1 click on the spin button => 
    output is win 2: pot=2, player1=10, player 2 = 8
    output is win 1: pot=3, player1 = 11, player2=8
    output is put 1: pot=5, player1 = 7, player2=8
    output is all put: pot=6, player1=7, player2=7
    output is win pot: pot =0, player1=12, player2=8

  
*/

// add value of wager to pot
/*
function addToPot()
const elem document.getElementById("num")
elem.addToPot = pot;
*/



let num = document.querySelector('#num');



// Get vaule of input when enter key pressed

function search(ele) {
  if(event.key === 'Enter') {
      alert(ele.value);        
  }
}


// functions describing what each game piece does

function win2() { 
  if (currentPlayer === "player1"){
    player1coins += 2
    pot -= 2
  } else { 
    player2coins += 2
    pot -=2
  }
}

function win1(){
  if (currentPlayer === "player1"){
    player1coins += 1
    
   } else{
      player2coins += 1
      
    }
  pot -= 1

}

function put1(){
  if (currentPlayer === "player1"){
    player1coins -= 1
    pot += 1
  }  else{
      player2coins -= 1
      pot += 1
    }
  
}
function put2(){
  if (currentPlayer === "player1"){
    player1coins -= 2
    pot += 2
  }  else{
      player2coins +=2
      pot += 2
    }
  
}
function bothPut(){
  if (currentPlayer === "player1"){
    player1coins -= 1
    pot += 1
   } else{
      player2coins -= 1
      pot += 1
    }
  
}
function takePot() { 
  if (currentPlayer === "player1"){
    player1coins += v
    pot = 0
   } else {
      player2coins += v
      pot
    }
  
}







// random number generator

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  console.log(getRandomInt(6));


// function to execute when spinbutton clicked
function spinButtonClicked () {
  // call/invoke the function "getRandomInt" and save the result in a variable "x"
  x = getRandomInt (6) 
  // Load the DOM object related to the "output" label of "Player 1" and assign it 
  // to a varaible called "player1Label"
  player1Label = document.getElementById("resultWords") 
  
  
  
  // set the "innerText" property of the DOM object to the value stored in the 
  // varaible "x"
  player1Label.innerText=  winType[x]


  // calculate score to pot
  if (x === 0){ 
    win2()

  } else{

  }
  //switch player turns
  if (currentPlayer === "player1"){
    currentPlayer = "player2"
  }else{
      currentPlayer = "player1"
  }
}


// set an event listner to the spinButton so that when the button is clicked
// the function "spinButtonClicked" is invoked/run
element.addEventListener("click", spinButtonClicked)


let daCoins = document.getElementById("daCoins1")
let daCoinz = document.getElementById("daCoins2")
 
//functoin to get vaule of both text boxes into Pot of coins
function getAllCoins (){

  v1 = parseInt(txt1.value)
  v2 = parseInt(txt2.value)
  if(isNaN(v1) || isNaN(v2)){
    coinsInPot.innerText = "Please put a valid coin value"
  } else {
    v = v1 + v2
    coinsInPot.innerText = v
     player1coins-= v1
     player2coins-= v2
     
   daCoins1.innerText = player1coins
   daCoins2.innerText = player2coins
    //console.log( player1coins , player2coins)
  }
}

txt1.addEventListener("keyup", getAllCoins)
txt2.addEventListener("keyup", getAllCoins)



//



// random number generator must pick between 6 numbers

// once selected coins are distributed to player or pot

// switch to other player turn

// run game game play once one player has 0 coins 

// determine winner once player has all 20 coins!





// .get element by id to for player one have change to minus coins out into display box
// first get a variable to store element
remainingCoins1 = document.getElementById


// keep track of coins each player has display player 