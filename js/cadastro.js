(function () {
  var ui = {
    fields: document.querySelectorAll("input, select"),
    options: document.querySelector("#type"),
    button: document.querySelector("form button"),
  };

  var validate = function () {
    var errors = 0;
    var products = {};

    ui.fields.forEach(function (field) {
      if (field.value.trim().length === 0) {
        field.classList.add("error");
        errors++;
      } else {
        field.classList.remove("error");
        products[field.id] = field.value.trim();
      }
    });

    if (errors === 0) {
      addProducts(products);
    } else {
      document.querySelector(".error").focus;
    }

    cleanFields();
  };

  var addProducts = function (products) {
    var endPoint = "http://aliencreative.com.br:5000/produtos";
    var config = {
      method: "POST",
      body: JSON.stringify(products),
      headers: new Headers({
        "Content-type": "application/json",
      }),
    };
    fetch(endPoint, config);
  };

  var cleanFields = () => ui.fields.forEach((field) => (field.value = ""));

  var init = (function () {
    ui.button.onclick = validate;
  })();
})();
