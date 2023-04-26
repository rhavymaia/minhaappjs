let p = document.getElementById("hora");

const exibirContador = () => {
  const date = new Date();
  let hora = date.toLocaleTimeString();
  document.title = "A hora atual é " + hora;
  p.innerHTML = "A hora atual é " + hora
}
setInterval(exibirContador, 1000);

//document.body.innerHTML = "<p> Meu parágrafo </p>";
p.innerHTML = "São 17h."