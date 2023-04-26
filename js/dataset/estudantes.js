const estudante = {
  "nome": "Maria",
  "nascimento": "2010-07-01",
  "matriculas": ["202200010001", "202300010001"],
  "disciplinas": [
    {
      "nome":"Linguagem de Script", 
      "ch": 67, 
      "professores": "Rhavy,Otacílio"
    }, 
    {"nome":"Estrutura de dados", "ch": 67, "professores": "Dornelles,Otacílio"}
  ],
  "ativo": true
};

console.log(estudante.nome);
console.log(estudante.nascimento);

let matriculas = estudante.matriculas;
for (let matricula of matriculas) {
  console.log(matricula);
}

console.log(estudante['matriculas'][0]);

console.log(estudante['disciplinas'][0]['nome']);
console.log(estudante.disciplinas[0].nome);

let disciplinas = estudante.disciplinas;
for (let disciplina of disciplinas) {
  console.log(`A disciplina ${disciplina.nome} tem uma CH de ${disciplina.ch}`);
  let professores = disciplina.professores.split(',');
  console.log(professores);

}


const myJSON = '{"name":"John", "age":30, "car":null}';
myJSON.name
const myObj = JSON.parse(myJSON);
myObj.name