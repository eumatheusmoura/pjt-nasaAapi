window.onload = function () {
  let today = new Date();
  let date =
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
  let data = $("#data").val();
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
  console.log(dado);
  let video = $("#video-nasa");
  let imagem = $("#img-nasa");
  let urlMidia = dado.url;
  let tipoMedia = JSON.stringify(dado.media_type);
  $("#titulo").text(dado.title);
  $("#paragrafo").text(dado.explanation);

  if (tipoMedia == '"image"') {
    $("#video-nasa").hide();
    imagem.attr("src", urlMidia);
    $("#img-nasa").show();
  } else {
    $("#video-nasa").show();
    video.attr("src", urlMidia);
    $("#img-nasa").hide();
  }
}

const botao = document.querySelector("#botao");

botao.addEventListener("click", function () {
  inicializadora();
});
