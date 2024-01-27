let valores = [8, 1, 7, 4, 2, 9, 10, 22, 76]
valores.sort(Number)
//console.log(valores)

/* Maneira mais burra de ser feito
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/
/*
for(let pos=0; pos < valores.length; pos++) {
    console.log(`Á posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for(let pos in valores ){
    console.log(`À posição ${pos} tem o valor ${valores[pos]} `)
}