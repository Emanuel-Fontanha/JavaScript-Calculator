function calcularMedia(grades) {
    
    if (grades.length == 0) {
        alert("Por favor, insira pelo menos uma nota.")
    } else {
        let media = 0.0
        for (let i = 0; i < grades.length; i++) 
            media += grades[i]
        media = parseFloat((media / grades.length).toFixed(2))
    
        document.querySelector("#final_average").innerText = "Média: " + media

        let status = document.getElementById("final_status")
        if (media >= 8) {
            status.className = "passed"
            status.textContent = "Aprovado"
            return
        } 
        if (media < 6) {
            status.className = "failed"
            status.textContent = "Reprovado"
            return
        }
        status.className = "final_test"
        status.textContent = "Recuperação..."
    }
}

function adicionarNota(grades) {

    let nota = document.querySelector("#nota").value.replace(',', '.')
    let isOk = true

    if (nota == "") {
        alert("Por favor, insira uma nota.")
        isOk = false
    }
    if (isNaN(nota)) {
        alert("A nota digitada não é um número válido, por favor, insira uma nota válida.")
        isOk = false
    }
    if (nota > 10 || nota < 0) {
        alert("A nota digitada é inválida, por favor, insira uma nota no intervalo de 0 a 10.")
        isOk = false
    }

    if (isOk) {
        grades.push(parseFloat(nota))
        let i = grades.length
        let text = document.createElement("p")
        text.innerText = "Nota " + i + ": " + nota
        document.querySelector("#historico").append(text)
    }

    document.querySelector("#nota").value = ""
}

function resetarHistorico(grades) {

    let historico = document.querySelector("#historico")
    let size = historico.children.length

    if (size == 0) {
        alert("Para reiniciar, insira pelo menos 1 nota no histórico.")
    } else {
        historico.innerHTML = ""
        grades.length = 0
        
        let status = document.getElementById("final_status")
        status.className = ""
        status.textContent = "......"
    }
}

let grades = []
let add_button = document.getElementById("input_button")
let average_button = document.getElementById("average_button")
let reset_button = document.getElementById("reset_button")

add_button.addEventListener("click", ()=> {adicionarNota(grades)})
average_button.addEventListener("click", ()=> {calcularMedia(grades)})
reset_button.addEventListener("click", () => {resetarHistorico(grades)})