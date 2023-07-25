import data from '../../Products/products.json'

const AskProducts =() => {
    return new Promise((resolve, reject) => {
        resolve(data)

    })

}
 export default AskProducts;