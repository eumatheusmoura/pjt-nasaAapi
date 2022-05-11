window.onload = function () {
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=6vGjl5MQm0NPPhYc3pAxRIW6eCb2IlaGsf37XxIs&date=${date}`,
    success: function (response) {
      insereDados(response);
    },
    error: function (request, error) {
      alert(request.responseText);
    },
  });
};

// Requisição da API

function inicializadora() {
  var data = $("#data").val();
  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=6vGjl5MQm0NPPhYc3pAxRIW6eCb2IlaGsf37XxIs&date=${data}`,
    success: function (response) {
      insereDados(response);
    },
    error: function (request, error) {
      alert(request.responseText);
    },
  });
}

function insereDados(dado) {
  var video = $("#video-nasa");
  var imagem = $("#img-nasa");
  var urlMidia = dado.url;
  var tipoMedia = JSON.stringify(dado.media_type);
  $("#titulo").text(dado.title);
  $("#paragrafo").text(dado.explanation);

  if (tipoMedia == '"image"') {
    video.addClass("esconder");
    imagem.attr("src", urlMidia);
    imagem.removeClass("esconder");
  } else {
    video.removeClass("esconder");
    video.attr("src", urlMidia);
    imagem.addClass("esconder");
  }
  console.log("Teste");
}

const botao = document.querySelector("#botao");

botao.addEventListener("click", function () {
  inicializadora();
});
