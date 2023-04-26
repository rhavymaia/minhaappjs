var alunos = ["João", "Maria", "José", "Brenda"];
var tamanho = alunos.length;
//console.log(alunos[tamanho-1]);

console.log("While");
var i = 0;
while(i < tamanho) {
  console.log(alunos[i]);
  i++;
}

console.log("For com incremento");
for (var j = 0; j < tamanho; j = j + 2) {
  console.log(alunos[j]);
}

console.log("For - in");
for (var k in alunos) {
  console.log(k);
}

console.log("For - of");
for (var aluno of alunos) {
  console.log(aluno);
}
