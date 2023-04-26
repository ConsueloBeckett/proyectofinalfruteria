function calcularTotalVerduras() {
  // Saludo inicial
  alert("Bienvenido a la frutería Frutiloops 🍎🥝🍌🍓");

  // Pedir el nombre del cliente
  const nombreCliente = prompt("Me podrías indicar tu nombre?");
  
  // Mostrar las opciones de verduras
  alert(`${nombreCliente}, tenemos las siguientes 4 variedades de verduras por el momento, con un valor de $2,500/kg:
  E - Espinaca
  B - Brócoli
  C - Cebolla
  T - Tomate`);
  
  // Pedir la selección de verduras
  let total = 0;
  let elecciones = "";
  
  for (let i = 1; i <= 2; i++) {
    const seleccion = prompt("Elige una verdura, indicando su letra: E - espinaca, B - brócoli, C - cebolla, T - tomate");

    switch (seleccion.toLowerCase()) {
      case "e":
        total += 2500;
        elecciones += "espinaca, ";
        break;
      case "b":
        total += 3000;
        elecciones += "brócoli, ";
        break;
      case "c":
        total += 2500;
        elecciones += "cebolla, ";
        break;
      case "t":
        total += 2000;
        elecciones += "tomate, ";
        break;
      default:
        alert("No has seleccionado una verdura válida.");
        i--; /* para dar una oportunidad al usuario de elección */
    }
  }

  // Mostrar el resultado final
  alert(`El valor total de tus elecciones de verduras es $${total} por las siguientes opciones: ${elecciones}`);
  
  // Devolver el valor total
  return total;
}
const totalVerduras = calcularTotalVerduras();
