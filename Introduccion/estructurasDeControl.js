function esMayorDeEdad(edad) {
    // Estructura condicional if-else
    if (edad >= 18) {
      return "Eres mayor de edad."
    } else {
      return "Eres menor de edad."
    }
  }
  
  // Pedir al usuario su edad
  const edadUsuario = parseInt(prompt("Ingrese su edad:"))
  
  // Llamar a la función y mostrar el resultado
  const resultado = esMayorDeEdad(edadUsuario)
  console.log(resultado)