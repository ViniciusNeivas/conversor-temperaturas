function celsiusParaFahrenheit() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorInserido = parseFloat(valor);
  
    var formulaFahrenheit = valorInserido * 1.8 + 32;
    var valorEmFahrenheit = formulaFahrenheit.toFixed(3);
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido =
      "O resultado em Fahrenheit é " + valorEmFahrenheit + "°F";
    elementoValorConvertido.innerHTML = valorConvertido;
  
    console.log(valorEmFahrenheit);
  }
  
  function celsiusParaKelvin() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
  
    var valorInserido = parseFloat(valor);
    var formulaKelvin = valorInserido + 273;
    var valorEmKelvin = formulaKelvin.toFixed(3);
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em Kelvin é " + valorEmKelvin + "K";
    elementoValorConvertido.innerHTML = valorConvertido;
    console.log(valorEmKelvin);
  }
  
  function fahrenheitParaCelsius() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
  
    var valorInserido = parseFloat(valor);
    var formulaCelsius = (valorInserido - 32) / 1.8;
    var valorEmCelsius = formulaCelsius.toFixed(3);
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em Celsius é " + valorEmCelsius + "°C";
    elementoValorConvertido.innerHTML = valorConvertido;
    console.log(valorEmCelsius);
  }
  
  function fahrenheitParaKelvin() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
  
    var valorInserido = parseFloat(valor);
    var formulaKelvin = (valorInserido - 32) * (5 / 9) + 273;
    var valorEmKelvin = formulaKelvin.toFixed(3);
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em Kelvin é " + valorEmKelvin + "K";
    elementoValorConvertido.innerHTML = valorConvertido;
    console.log(valorEmKelvin);
  }
  function kelvinParaCelsius() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
  
    var valorInserido = parseFloat(valor);
    var formulaCelsius = valorInserido - 273;
    var valorEmCelsius = formulaCelsius.toFixed(3);
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em Celsius é " + valorEmCelsius + "°C";
    elementoValorConvertido.innerHTML = valorConvertido;
    console.log(valorEmCelsius);
  }
  
  function kelvinParaFahrenheit() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
  
    var valorInserido = parseFloat(valor);
    var formulaFahrenheit = (valorInserido - 273) * 1.8 + 32;
    var valorEmFahrenheit = formulaFahrenheit.toFixed(3);
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido =
      "O resultado em Fahrenheit é " + valorEmFahrenheit + "°F";
    elementoValorConvertido.innerHTML = valorConvertido;
    console.log(valorEmFahrenheit);
  }
  
  //KelvinParaCelsius()