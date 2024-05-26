const nun1 = 50
const nun2 = 100
const nun3 = 50

let maior, meio, menor

//Ref nun1
if (nun1 > nun2 && nun1 > nun3){
    maior = nun1
} else if (nun1 < nun2 && nun1 < nun3 ){
    menor = nun1
} else {
    meio = nun1
}

//Ref nun2
if (nun2 > nun1 && nun2 > nun3){
    maior = nun2
} else if (nun2 < nun1 && nun2 < nun3){
    menor = nun2
} else{
    meio = nun2
}

//Ref nun3
if (nun3 > nun1 && nun3 > nun2){
    maior = nun3
} else if (nun3 < nun1 && nun3 < nun2){
    menor = nun3
} else{
    meio = nun3
}

console.log(`Maior valor: ${maior}\nValor do meio:${meio}\nMenor valor: ${menor}`)