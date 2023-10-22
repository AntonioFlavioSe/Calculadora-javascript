//Criando uma clculadora em .js;
// Ao clicar no botão ele chama uma função chamada outcome:

function outcome() {
  //Precisa pegar as informações armazenadas pelo usuario nas variaveis num 1 e num 2;
  //Puxando do HTML o numero 1
  let num1 = Number(document.getElementById("num-one").value);
  //Puxando do HTML o numero 2
  let num2 = Number(document.getElementById("num-two").value);
  //O toltal é:
  let total = 0;
  //Se o botão x ou y foi marcado:
  if (document.getElementById("box1").checked) {
    total = num1 + num2;
  } else if (document.getElementById("box2").checked) {
    total = num1 - num2;
  } else if (document.getElementById("box3").checked) {
    total = num1 * num2;
  } else {
    total = num1 / num2;
  }
  //
  document.getElementById("resultArea").innerHTML =
    "O resultado é: " + String(total);
}
