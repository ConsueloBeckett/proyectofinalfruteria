
const Semilla = function(nombre,precio,caracteristica,cantidad){
this.nombre= nombre,
this.precio= precio,
this.caracteristica= caracteristica,
this.cantidad= cantidad
}

// semillas disponibles
let semilla1= new Semilla ("Berenjena 🍆", 2500,  "es una hortaliza de color morado oscuro que se utiliza en muchas preparaciones culinarias.",10 );
let semilla2= new Semilla ("Frutilla 🍓", 3000,  "es una fruta dulce y aromática que se utiliza en postres y otros platos dulces.",20 );
let semilla3= new Semilla ("Durazno 🍑", 2500,  "es una fruta jugosa y dulce que se consume fresca o en conserva.",15 );
let semilla4= new Semilla ("Tomate 🍅", 2000,  "es una hortaliza muy versátil que se utiliza en muchas preparaciones culinarias.",30 );
let semilla5= new Semilla ("Arandano 🫐 ", 5500,  "es una fruta pequeña y dulce que se utiliza en postres y otros platos dulces.",08 );
let semilla6= new Semilla ("Cereza 🍒 ", 2500,  "es una fruta dulce y jugosa que se consume fresca o en conserva",20 );
let semilla7= new Semilla ("Sandia 🍉 ", 2000,  "es una fruta grande y refrescante que se consume principalmente en verano.",20 );
let semilla8= new Semilla ("Mango 🥭", 2500,  "es una fruta tropical dulce y jugosa que se consume fresca o en conserva.",15 );

let catalogo = [semilla1,semilla2,semilla3,semilla4,semilla5,semilla6,semilla7,semilla8]

 
// buscar semillas 
function buscaSemillas(){
const body = document.querySelector('body');

const input = document.getElementById('eleccionUsuario').value // valor de seleccion usuario

const userSelection = input.trim().toUpperCase();

const resultSemilla = catalogo.filter((Semilla) => Semilla.nombre.toUpperCase().includes(userSelection));
 
if (resultSemilla.length > 0){ // con valor crear un div
const container = document.createElement('div');
container.classList.add('card-container');

resultSemilla.forEach((semilla) => { // cada uno de los elementos crea un div
 const card = document.createElement('div');
 card.classList.add('card'); 

 const nombre = document.createElement('h4');  // cada nombre crea un h4
 nombre.textContent = semilla.nombre;
 card.appendChild(nombre);

 const precio = document.createElement('p'); // cada precio crea un parrafo
 precio.textContent = `Precio: ${semilla.precio}`;
card.appendChild(precio);

const caracteristica = document.createElement('p'); // cada caract crea un parrafo
caracteristica.textContent = `Caracteristica: ${semilla.caracteristica}`;
card.appendChild(caracteristica);
 
const cantidad = document.createElement('p'); // cada stock crea un parrafo
cantidad.textContent = `Cantidad en stock: ${semilla.cantidad}`;
card.appendChild(cantidad);

container.appendChild(card); //  crea una card 
});
body.appendChild(container);
}else {
  alert("no hay resultados");
}}



// form para solicitar semillas 
function solicitarSemilla(){
const solicitarForm = document.createElement(`form`);
solicitarForm.innerHTML =`
<label for="nombre-input">Nombre:</label>
<input id="nombre-semilla" type="text" required>

<label for="precio-input">Precio:</label>
<input id="precio-semilla" type="number"  step="0.01" required>

<label for="caracteristica-input">Caracteristica (modificado S/N ):</label>
<input id="caracteristica-semilla" type="text" required>

<label for="cantidad-input">Cantidad en stock:</label>
<input id="cantidad-semilla" type="number" step="1" required>

<button type="submit">Solicitar</button>

`;

solicitarForm.addEventListener('submit', function(event) {
event.preventDefault(); 

//incorporar las id
const solicitarNombre = document.getElementById('nombre-semilla').value.trim();
const solicitarPrecio = parseFloat(document.getElementById('precio-semilla').value);
const solicitarCaracteristica = document.getElementById('caracteristica-semilla').value.trim();
const solicitarCantidad = parseFloat(document.getElementById('cantidad-semilla').value);

//validaciones
if (isNaN(solicitarPrecio) || isNaN(solicitarCantidad) || solicitarNombre === '' || solicitarCaracteristica === '') {
alert('ingresa valores validos, por favor.');
return;
}

const semilla = new Semilla(solicitarNombre, solicitarPrecio, solicitarCaracteristica, solicitarCantidad);

//buscar si hay coincidencias
if (catalogo.some((elemento) => elemento.nombre === semilla.nombre)){
alert('la solcitud de semilla ya esta en el catalogo');
return;
}
//incorporar a catalogo 
catalogo.push(semilla);

localStorage.setItem("semillas", JSON.stringify(catalogo));
alert(`se ha agregado correctamebte su solicitud de semilla de" ${semilla.nombre}" al catalogo`);

console.table(catalogo);

const container = document.createElement('div');
container.classList.add('card-container');

catalogo.forEach((semilla) => {
const card = document.createElement('div');
card.classList.add('card');

const nombre = document.createElement('h4');  // cada nombre crea un h4
 nombre.textContent = semilla.nombre;
 card.appendChild(nombre);

 const precio = document.createElement('p'); // cada precio crea un parrafo
 precio.textContent = `Precio: ${semilla.precio}`;
card.appendChild(precio);

const caracteristica = document.createElement('p'); // cada caract crea un parrafo
caracteristica.textContent = `Caracteristica: ${semilla.caracteristica}`;
card.appendChild(caracteristica);
 
const cantidad = document.createElement('p'); // cada stock crea un parrafo
cantidad.textContent = `Cantidad en stock: ${semilla.cantidad}`;
card.appendChild(cantidad);

container.appendChild(card); //  crea una card 

});

const body = document.querySelector('body');
body.appendChild(container);

solicitarForm.reset();

});

const body = document.querySelector('body');
body.appendChild(solicitarForm);
}


// value botton solicitar
const solicitarBoton = document.getElementById("solicite");
solicitarBoton.addEventListener("click", () => {
 solicitarSemilla(); 
});


// value botton buscar 
const filtradoBoton = document.getElementById("buscar");
filtradoBoton.addEventListener("click", () => {
 buscaSemillas(); 
});