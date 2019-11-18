(function () {
  var ui = {
    field: document.querySelector("#ean"),
    button: document.querySelector("form button"),
    table: document.querySelector("tbody")
  }

  // var find = function () {
  //   event.preventDefault()


  // }

  var getProduct = function () {
    event.preventDefault()
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

  var getProductSuccess = function (product) {
    // console.log("consegui")
    var find = ui.field.value;
    // console.log(ui.field.value)
    var encontrar = product.find(function (element) {
      // console.log(element.ean)
      if (element.ean == find) {
        var encontrado = element;
        exibe(encontrado);
      }
    })
  }

  var exibe = function (product) {
    console.log(product)
    var html = `
    <tr>
      <td>${product.ean}</td>
      <td>${product.name}</td>
      <td>${product.quantity}</td>
      <td>${product.price}</td>
      <td>${product.type}</td>
    </tr>
    `
    ui.table.innerHTML = html;
    console.log(html)
  }

  var genericError = function () {
    debugger
  };

  var init = function () {
    ui.button.onclick = getProduct;
  }();
})();