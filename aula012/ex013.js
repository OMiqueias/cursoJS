var agora = new Date()
var diaS = 9//agora.getDay()

switch (diaS) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-Feira')
        break
    case 2:
        console.log('Terça-Feira')
        break
    case 3:
        console.log('Quarta-Feira')
        break
    case 4:
        console.log('Quinta-Feira')
        break
    case 5:
        console.log('Sexta-Feira')
        break
    case 6:
        console.log('Sábado')
        break
    case 7:
        console.log('Domingo')
        break
    default:
        console.log('[ERRO] Valor invalido!')
        break
}
