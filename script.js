// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 

let player1 = "";
let player2 = "";

if (player1 == "pedra" || "Pedra") {
  if (player2 == "tesoura" || "Tesoura") {
 console.log("Player 1 won");
 } else if (player2== "papel" || "Papel"){
 console.log("Player 2 won");
 } else if (player2 == "pedra" || "Pedra") {
  console.log("A Tie");
 }

}
else if (player1 == "tesoura" || "Tesoura") {
 if (player2 == "pedra" || "Pedra") {
  console.log("Player 2 won");
 } else if (player2 == "papel" || "Papel"){
  console.log("Player 1 won");
 } else if (player2 == "tesoura" || "Tesoura") {
  console.log("A Tie");
 }
}

else if (player1== "papel" || "Papel"){
 if (jogador2 == "pedra" || "Pedra") {
  console.log("Player 1 won");
 }else if (player2 == "tesoura" || "Tesoura") {
  console.log("Player 2 won");
 }else if (player2 == "papel" || "Papel")  {
  console.log("A tie");
 }

}


