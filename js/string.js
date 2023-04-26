function recortar(texto, inicio) {
  let novaFrase = "";
  for (let i=inicio; i<texto.length ; i++) {
  novaFrase = novaFrase + texto[i];
  }
  return novaFrase;
}

let frase = "O curso de TSI é bacana!";
let resultado  = recortar(frase, 11);
//O curso de TSI é bacana!
console.log(resultado);



var browserType = 'mozilla';
let indice = browserType.indexOf('zilla');
console.log(indice);
resultado = browserType.slice(0,3);
console.log(resultado);