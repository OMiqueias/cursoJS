var idade = 21

console.log(`Olá, você tem ${idade} anos.`)

if (idade < 16) {
    console.log(`Não vota!`)
} else if (idade < 18 || idade >= 67) {
    console.log(`Permitido votar! (Não obrigatorio)`)
} else {
    console.log(`Voto obrigatorio!`)
}