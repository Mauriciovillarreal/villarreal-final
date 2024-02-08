const productos = [
    {id: "91", nombre: "Jacobs Bone", precio: 90000, img: "../img/egjacobs-bonelentes.jpg", idCat: "1", stock: 100},
    {id: "92", nombre: "Jacobs brillo", precio: 90000, img: "../img/egjacobs-negrobrillo.jpg", idCat: "1", stock: 100},
    {id: "93", nombre: "Jacobs brillo Red", precio: 96000, img: "../img/egjacobs-negrobrillored.jpg", idCat: "1", stock: 100},
    {id: "94", nombre: "Jacobs Milky olive", precio: 110500, img: "../img/egjacobs-milkyolive.jpg", idCat: "1", stock: 100},
    {id: "95", nombre: "Jacobs Milky brown", precio: 110500, img: "../img/egjacobs-milkybrown.jpg", idCat: "1", stock: 100},
    {id: "96", nombre: "Lyon Polarizado", precio: 110050, img: "../img/lyon.png", idCat: "2", stock: 100},
    {id: "97", nombre: "Caravan Milky", precio: 110050, img: "../img/caravanmilky.png", idCat: "2", stock: 100},
    {id: "98", nombre: "Denver FT Valentin Benet", precio: 118450, img: "../img/denver.png", idCat: "2", stock: 100},
    {id: "99", nombre: "Glasgow Premium", precio: 163900, img: "../img/glasgow.png", idCat: "2", stock: 100},
    {id: "100", nombre: "Tulum Dark Honey", precio: 163900, img: "../img/tulumdark.png", idCat: "2", stock: 100},
    {id: "101", nombre: "Frida Translucido", precio: 73990, img: "../img/fridatranslucido.png", idCat: "3", stock: 100},
    {id: "102", nombre: "Gruyere Honey", precio: 72840, img: "../img/gruyere.png", idCat: "3", stock: 100},
    {id: "103", nombre: "Lyon Mate", precio: 75900, img: "../img/lyonmate.png", idCat: "3", stock: 100},
    {id: "104", nombre: "Frida Carey", precio: 73900, img: "../img/frida.png", idCat: "3", stock: 100},
    {id: "105", nombre: "Exclamation White", precio: 78900, img: "../img/exclamation.png", idCat: "3", stock: 100},
    {id: "106", nombre: "Xenote Tostado", precio: 110900, img: "../img/xenote.png", idCat: "4", stock: 100},
    {id: "107", nombre: "Square Tostado", precio: 110900, img: "../img/square.png", idCat: "4", stock: 100},
    {id: "108", nombre: "Dubai Metal", precio: 11040, img: "../img/dubai.png", idCat: "4", stock: 100},
    {id: "109", nombre: "Aero Quad", precio: 11890, img: "../img/aero.png", idCat: "4", stock: 100},
    {id: "110", nombre: "Aero Panto", precio: 110900, img: "../img/aeropanto.png", idCat: "4", stock: 100},
    {id: "111", nombre: "Manila Premium Series", precio: 120900, img: "../img/manila.png", idCat: "5", stock: 100},
    {id: "112", nombre: "Hanoi Premium Series", precio: 120900, img: "../img/hanoi.png", idCat: "5", stock: 100},
    {id: "113", nombre: "Bombay Premium Series", precio: 125900, img: "../img/bombay.png", idCat: "5", stock: 100},
    {id: "114", nombre: "Bombay Premium Series", precio: 125900, img: "../img/bombay2.png", idCat: "5", stock: 100},
    {id: "115", nombre: "Lyon Metal Oliva Premium Series", precio: 126900, img: "../img/lyonoliva.png", idCat: "5", stock: 100},
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000)
    })
}

//Funcion similar pero que ahora me retorne un solo item: 

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}

//Creamos una función que retorne toda la categoria. 

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 2000)
    })
}
