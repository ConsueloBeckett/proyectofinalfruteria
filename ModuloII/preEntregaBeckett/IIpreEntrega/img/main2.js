
const Semilla = function(nombre,precio,caracteristica,cantidad,img){
this.nombre= nombre,
this.precio= precio,
this.caracteristica= caracteristica,
this.cantidad= cantidad,
this.img= img
}

// semillas disponibles
let semilla1= new Semilla ("Berenjena 🍆", 2500,  "es una hortaliza de color morado oscuro que se utiliza en muchas preparaciones culinarias.",10 );
let semilla2= new Semilla ("Frutilla 🍓", 3000,  "es una fruta dulce y aromática que se utiliza en postres y otros platos dulces.",20 );
let semilla3= new Semilla ("Durazno 🍑", 2500,  "es una fruta jugosa y dulce que se consume fresca o en conserva.",15 );
let semilla4= new Semilla ("Tomate 🍅", 2000,  "es una hortaliza muy versátil que se utiliza en muchas preparaciones culinarias.",50 );
let semilla5= new Semilla ("Arandano 🫐 ", 5500,  "es una fruta pequeña y dulce que se utiliza en postres y otros platos dulces.",08 );
let semilla6= new Semilla ("Cereza 🍒 ", 2500,  "es una fruta dulce y jugosa que se consume fresca o en conserva",20 );
let semilla7= new Semilla ("Sandia 🍉 ", 2000,  "es una fruta grande y refrescante que se consume principalmente en verano.",40 );
let semilla8= new Semilla ("Mango 🥭", 2500,  "es una fruta tropical dulce y jugosa que se consume fresca o en conserva.",45, ../IIIpreEntrega/img/mango.jpg);

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
cantidad.textContent = `Cantidad: ${semilla.cantidad}`;
card.appendChild(cantidad);


container.appendChild(card); //  crea una card 

const imagen = document.createElement('img'); // imagen semilla
img.textContent = ` foto: ${semilla.img}`;
card.appendChild(img);


});
body.appendChild(container);
}else {
  alert("no hay resultados");
}}

// value boton 
const filtradoBoton = document.getElementById("buscar");
filtradoBoton.addEventListener("click", () => {
 buscaSemillas(); 
});

