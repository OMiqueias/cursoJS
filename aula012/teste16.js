let diaSemana = 'd'

if (diaSemana == 'Domingo' || diaSemana == 'domingo' || diaSemana == 1) {
    console.log(`1º - Domingo.`)
} else if (diaSemana == 'Segunda-Feira' || diaSemana == 'Segunda' || diaSemana == 2) {
    console.log(`2º - Segunda-Feira.`)
} else if (diaSemana == 'Terça-Feira' || diaSemana == 'Terça' || diaSemana == 3) {
    console.log(`3º - Terça-Feira.`)
} else if (diaSemana == 'Quarta-Feira' || diaSemana == 'Quarta' || diaSemana == 4) {
    console.log(`4º - Quarta-Feira.`)
} else if (diaSemana == 'Quinta-Feira' || diaSemana == 'Quinta' || diaSemana == 5) {
    console.log(`5º - Quinta-Feira.`)
} else if (diaSemana == 'Sexta-Feira' || diaSemana == 'Sexta' || diaSemana == 6) {
    console.log(`6º - Sexta-Feira.`)
} else if (diaSemana == 'Sábado' || diaSemana == 'sábado' || diaSemana == 'sabado' || diaSemana == 7) {
    console.log(`7º - Sábado`)
} else if (diaSemana == '') {
    console.log(`[ERRO] Não é possível identificar o número do dia da semana sem um dia especificado!`)
} else {
    console.log(`[ERRO] O dia em questão -> ${diaSemana}, não foi identificado!`)
}