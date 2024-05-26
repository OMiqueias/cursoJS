/*
8. As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver um script que calculará os reajustes.

Faça um script que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:

    salários até R$ 280,00 (incluindo) : aumento de 20%
    salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
    salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
    salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
    o salário antes do reajuste;
    o percentual de aumento aplicado;
    o valor do aumento;
    o novo salário, após o aumento.
*/

let salario = 1500

if(salario <= 280){
    salaAum = salario*1.2
}else if(salario > 280 && salario <= 699){
    salaAum = salario*1.15
}else if (salario >= 700 && salario <= 1499){
    salaAum = salario*1.1
} else if (salario >= 1500){
    salaAum = salario*1.05
} else {
    console.log(`Algum erro ocorreu!`)
}

console.log(`Olá!\nO salário foi de R$${salario} para R$${salaAum}.`)