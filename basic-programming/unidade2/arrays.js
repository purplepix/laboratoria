
var idade = [80, 60, 45, 20, 7, 1];
for (var co = 0; co < idade.length; co = co + 1) {
  console.log(idade[co]);
}

//vantagem de usar o for ao invés de while:
var idades = [80, 60, 45, 20, 7, 1];
for (printIdade of idades) {
  console.log(printIdade);
}
