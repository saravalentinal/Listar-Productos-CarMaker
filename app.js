let process = require("process")
let {leerArchivo,guardarProducto, leerPorCategoria} = require("./funcionesDeProductos")

let argumentos = process.argv 
let miComando = argumentos[2] 

switch (miComando) { 
    case "listar":
        let datosJSON = leerArchivo()
        datosJSON.forEach(function(datos){
            console.log(datos.titulo);
        })
        break;
    case "crear":
        let nombreProducto = argumentos[3];
        let descripcionProducto = argumentos[4];
        let imgProducto = argumentos[5];
        let categoria = argumentos[6];
        let colores = argumentos[7];
        let precioProducto = argumentos[8];
        let ruedas = argumentos[9];
        let id = argumentos[10];

        let nuevoProducto = {
            nombre : nombreProducto,
            descripcion : descripcionProducto,
            imagen : imgProducto,
            categoria : categoria,
            colores : colores,
            precio : precioProducto,
            ruedas : ruedas,
            id : id
        }
        guardarProducto(nuevoProducto);
        break;
        
    case "filtrar":
        let propiedadIngresada = argumentos[3];
        let categoriaIngresada = argumentos[4];
        let arrayDeProductosFiltrados = leerPorCategoria(categoriaIngresada);
        arrayDeProductosFiltrados.forEach(function(producto){
            console.log(producto.nombre);
        })
        break;

    case undefined:
        console.log("Atención - Tienes que pasar una acción.")
        break;
    
    default:
        console.log("No entiendo qué quieres hacer.")
        break;
}

//agregar una nueva funcion que te permita cambiarle el estado a una tarea.