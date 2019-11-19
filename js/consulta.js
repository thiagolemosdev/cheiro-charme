(function () {
  var ui = {
    ean: document.querySelector("#ean"),
    type: document.querySelector("#type"),
    button: document.querySelector("form button"),
    table: document.querySelector("tbody")
  }

  // console.log(ui.field)

  // var find = function () {
  //   event.preventDefault()


  // }
  var htmlList = ""
  var getProduct = function () {
    event.preventDefault()
    htmlList = ""
    var endPoint = "http://localhost:5000/produtos"
    var config = {
      method: "GET",
      headers: new Headers({
        "Content-type": "application/json"
      })
    }

    fetch(endPoint, config)
      .then(function (resp) {
        return resp.json();
      })
      .then(getProductSuccess)
    // .catch(genericError)

  }

  var getProductSuccess = function (products) {
    // console.log("consegui")
    var findEan = ui.ean.value;
    var findType = ui.type.value;
    // console.log(ui.field.value)
  
    products.find(function (element) {
      if (element.ean == findEan || element.type == findType) {
        var encontrado = element;
        exibe(encontrado);
      }
    })
  }

  
  var exibe = function (products) {
    // console.log(products)
    
    var html = `
    <tr>
      <td>${products.ean}</td>
      <td>${products.name}</td>
      <td>${products.quantity}</td>
      <td>R$ ${products.price}</td>
      <td>${products.type}</td>
    </tr>
    `
  
    htmlList = htmlList + html;
    ui.table.innerHTML = htmlList;
  }

  var genericError = function () {
    debugger
  };

  var init = function () {
    ui.button.onclick = getProduct;
  }();
})();