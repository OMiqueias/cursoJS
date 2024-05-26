val1 = 1
val2 = 22
val3 = 44

if (val1 >= val2 && val1 >= val3){
    console.log(`O maior valor é ${val1}`)
} else if (val2 >= val1 && val2 >= val3){
    console.log(`O maior valor é ${val2}`)
} else if (val3 >= val1 && val3 >= val2){
    console.log(`O maior valor é ${val3}`)
}else {
    console.log(`Ocorreu um erro!`)
}

if (val1 <= val2 && val1 <= val3){
    console.log(`O menor valor é ${val1}`)
} else if (val2 <= val1 && val2 <= val3){
    console.log(`O menor valor é ${val2}`)
} else if (val3 <= val1 && val3 <= val2){
    console.log(`O menor valor é ${val3}`)
}else {
    console.log(`Ocorreu um erro!`)
}