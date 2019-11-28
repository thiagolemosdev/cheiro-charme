(function () {

  var ui = {
    fields: document.querySelectorAll("input"),
    buttonSoma: document.querySelector("#soma"),
    buttonSubtrair: document.querySelector("#subtrair")
  }

  // console.log(ui)
  var getItem = function () {

  }

  var soma = function () {
    console.log(soma)
  }

  var subtrair = function () {
    console.log(subtrair)
  }

  var init = function () {
    ui.buttonSoma.onclick = soma;
    ui.buttonSubtrair.onclick = subtrair;
    ui.buttonPesquisar.onclick = getItem;

  }();
})();