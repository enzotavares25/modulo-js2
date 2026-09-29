
let aura = Number(prompt ("quanto de aura você tem?"))
let anosdeFarming = Number(prompt("há quantos anos você farma?"))
let nivel = "";

if (aura >= 0 && aura <= 999 && anosdeFarming >= 1) {
nivel = "Betinha"
} else if (aura >= 1000 && aura <= 2999 && anosdeFarming >= 6) {
nivel = "Alpha"
} else if (aura >= 3000 && aura <= 4199 && anosdeFarming >= 12) {
nivel = "Sigma"
} else if (aura >= 4200 && anosdeFarming >= 16) {
nivel = "Absolute Cinema"
}

alert(`Você é um ${nivel}`)


