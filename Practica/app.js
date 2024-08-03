const mensaje = document.getElementById('mensaje')

const numeroSecreto = Math.floor(Math.random() * 10) + 1
console.log(numeroSecreto);

function adivinar(){
    const numeroUsuario = parseInt(document.getElementById('numero').value)

    if(numeroUsuario < 1 || numeroUsuario > 10){
        mensaje.textContent = "Por favor, ingresa un número entre 1 y 10."
    } else if(numeroUsuario === numeroSecreto){
        mensaje.textContent = "Felicidades. Adivinaste el número."
    } else if(numeroUsuario < numeroSecreto){
        mensaje.textContent = "El número secreto es mayor"
    } else{
        mensaje.textContent = "El número secreto es menor"
    }
}