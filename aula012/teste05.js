var nota1 = 5
var nota2 = 4
var nota3 = 5
var nota4 = 10
var nota5 = 6

var aluno = 'João'

media = (nota1 + nota2 + nota3 + nota4 + nota5)/ 5

if (media < 6){
    console.log (`<p>A média do sr. ${aluno} foi de ${media} está REPROVADO!</p>`)
} else if (media == 6 || media == 7){
    console.log (`<p>A média do sr. ${aluno} foi de ${media}, dito isso, o aluno foi direcionado para recuperação e está temporariamente REPROVADO!</p>`)
} else {
    console.log (`<p>A média do <strong>sr. ${aluno}</strong> foi de <strong>${media}</strong>. APROVADO!</p>`)
}