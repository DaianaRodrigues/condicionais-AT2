//1

let nascimento = prompt('Digite o seu ano de Nascimento');

if (nascimento <= 2004){
    alert('Você pode votar')
} else{
    alert('Você não pode votar')
}

//2

let senha = prompt('Digite a sua senha');

if (senha == 1234){
    alert('Acesso Permitido')
} else {
    alert('Acesso Negado')
}

//3

let turno = prompt('Em qual turno você estuda?');

let valor = ['M', 'm', 'V', 'v', 'N', 'n'];
if (turno == valor[0] || turno == valor[1]){
    alert('Bom Dia');
}
else if(turno == valor[2] || turno == valor[3]){
    alert('Boa Tarde');
}
else if (turno == valor[4] || turno == valor[5]){
    alert('Boa Noite')
}
else {
    alert('Invalido')
}