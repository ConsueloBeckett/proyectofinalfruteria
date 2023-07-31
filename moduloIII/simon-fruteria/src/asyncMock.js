const products = [
    {
      id: "1",
      nombre: "Berenjena",
      precio: 2500,
      cantidad: 10,
      image: "https://wprock.fr/ezoimgfmt/assets.wprock.fr/emoji/joypixels/512/1f346.png?ezimgfmt=rs:140x140/rscb25/ng:webp/ngcb25",
      caracteristica: "es una hortaliza de color morado oscuro que se utiliza en muchas preparaciones culinarias.",
      category: "verdura"
    },
    {
      id: "2",
      nombre: "Arandano",
      precio: 5000,
      cantidad: 8,
      image: "data:image/png;base64,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",
      caracteristica: "es una fruta pequeña y dulce que se utiliza en postres y otros platos dulces.",
      category: "fruta"
    },
    {
      id: "3",
      nombre: "Frutilla",
      precio: 3000,
      cantidad: 20,
      image: "https://wprock.fr/ezoimgfmt/assets.wprock.fr/emoji/joypixels/512/1f353.png?ezimgfmt=ng%3Awebp%2Fngcb25%2Frs%3Adevice%2Frscb25-1",
      caracteristica: "es una fruta dulce y aromática que se utiliza en postres y otros platos dulces.",
      category: "fruta"
    },
    {
      id: "4",
      nombre: "Cereza",
      precio: 5000,
      cantidad: 20,
      image: "https://wprock.fr/ezoimgfmt/assets.wprock.fr/emoji/joypixels/512/1f352.png?ezimgfmt=rs:140x140/rscb25/ngcb25/notWebP",
      caracteristica: "es una fruta dulce y jugosa que se consume fresca o en conserva",
      category: "fruta"
    },
    {
      id: "5",
      nombre: "Durazno",
      precio: 2500,
      cantidad: 15,
      image: "https://wprock.fr/ezoimgfmt/assets.wprock.fr/emoji/joypixels/512/1f351.png?ezimgfmt=ng%3Awebp%2Fngcb25%2Frs%3Adevice%2Frscb25-1",
      caracteristica: "es una fruta jugosa y dulce que se consume fresca o en conserva.",
      category: "fruta"
    },
    {
      id: "6",
      nombre: "Sandia",
      precio: 3000,
      cantidad: 20,
      image: "https://wprock.fr/ezoimgfmt/assets.wprock.fr/emoji/joypixels/512/1f349.png?ezimgfmt=rs:140x140/rscb25/ngcb25/notWebP",
      caracteristica: "es una fruta grande y refrescante que se consume principalmente en verano.",
      category: "fruta"
    },
    {
      id: "7",
      nombre: "Tomate",
      precio: 1500,
      cantidad: 30,
      image: "https://wprock.fr/ezoimgfmt/assets.wprock.fr/emoji/joypixels/512/1f345.png?ezimgfmt=rs:140x140/rscb25/ngcb25/notWebP",
      caracteristica: "es una hortaliza muy versátil que se utiliza en muchas preparaciones culinarias.",
      category: "verdura"
    },
    {
      id: "8",
      nombre: "Mango",
      precio: 3000,
      cantidad: 15,
      image: "https://wprock.fr/ezoimgfmt/assets.wprock.fr/emoji/joypixels/512/1f96d.png?ezimgfmt=ng%3Awebp%2Fngcb25%2Frs%3Adevice%2Frscb25-1",
      caracteristica: "es una fruta tropical dulce y jugosa que se consume fresca o en conserva.",
      category: "fruta"
    },
    {
      id: "9",
      nombre: "Pera",
      precio: 2000,
      cantidad: 25,
      image: "https://wprock.fr/ezoimgfmt/assets.wprock.fr/emoji/joypixels/512/1f350.png?ezimgfmt=rs:140x140/rscb25/ngcb25/notWebP",
      caracteristica: "es una fruta  dulce y jugosa que se consume tanto cruda como al horno.",
      category: "fruta"
    },
    {
      id: "10",
      nombre: "Kiwi",
      precio: 2000,
      cantidad: 12,
      image: "https://wprock.fr/ezoimgfmt/assets.wprock.fr/emoji/joypixels/512/1f95d.png?ezimgfmt=rs:140x140/rscb25/ngcb25/notWebP",
      caracteristica: "es una fruta  dulce y jugosa.",
      category: "fruta"
    }
  ]


export const getProducts = () => {
return new Promise((res) => {
setTimeout(() => {
  res(products);

}, 400)

})
}


export const getProductsById = (itemId) => {
return new Promise(res => {
setTimeout(() => {
  const producto = products.find(prod => prod.id === itemId);
  res(producto);
  }, 400)

})

}

export const getProductsByCategory = (category) => {
return new Promise(res => {
setTimeout(() => {
  const productsByCategory = products.filter(product => product.category === category)
  res(productsByCategory);

  }, 400)

})

}


