let coxinha = prompt(`Gostaria de uma coxinha? S para sim, N para não`).toLowerCase()
let conta = 0

while (coxinha === `s`) {
    conta = conta + 2.5
    coxinha = prompt(`Quer mais uma coxinha?`)
}

console.log(conta)