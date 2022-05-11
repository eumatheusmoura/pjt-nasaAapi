// Requisição da API

function inicializadora() {
  var data = $("#data").val();
  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=6vGjl5MQm0NPPhYc3pAxRIW6eCb2IlaGsf37XxIs&date=${data}`,
    success: function (response) {
      console.log(response);
    },
    error: function (request, error) {
      alert(request.responseText);
    },
  });
}
inicializadora();
