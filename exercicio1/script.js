let conta = 0
let coxinha = prompt("Gostaria de uma coxinha? Sim ou Não.").toLowerCase()

while (coxinha !== "sim" && coxinha !== "nao") {
    console.log("Resposta errada. Sim ou Não")
    coxinha = prompt("Resposta errada, sim ou não. \nGostaria de uma coxinha?")
   
}

 while (coxinha === "sim" && coxinha !== "nao") {
        console.log(conta = conta + 2.5)
        coxinha = prompt("Gostaria de mais coxinhas? Sim ou Não.").toLowerCase()
    }

console.log(conta)
