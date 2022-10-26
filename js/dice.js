/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


		// Function to roll the dice
               // import {nextplayer} from './nextplayer.js';

function rollTheDice() {
setTimeout(function () {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".img1").setAttribute("src",
            "imagens/Dice" + randomNumber1 + ".png");

    document.querySelector(".img2").setAttribute("src",
            "imagens/Dice" + randomNumber2 + ".png");

    var sum = randomNumber1 + randomNumber2;
    document.getElementById("sum").value = sum;
}, 2500);
}
import {Gameplay} from './Gameplay.js'; 
var gp= new Gameplay();
var player1 = new TokenPlayer('Inteligência Artificial', 'IA1');
var player2 = new TokenPlayer('Jogador', 'Yaris');
var player3 = new TokenPlayer('Inteligência Artificial', 'IA2');
var player4 = new TokenPlayer('Jogador', 'Gabriel');
this.player_list.push(player1);
this.player_list.push(player2);
this.player_list.push(player3);
this.player_list.push(player4);

function nextplayer() {
if ( contador>4) {
    contador=0;
}
 player2 = prompt("Change player2 name");
 document.getElementById("player").value = this.player_list[contador].name;
 //document.querySelector("input.player").innerHTML = this.player_list[contador].name;
    this.contador += 1;
  }