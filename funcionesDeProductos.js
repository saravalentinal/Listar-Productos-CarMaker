let fs = require("fs")

const leerArchivo = () => {
    let datos = fs.readFileSync("./productos.json","UTF-8")
    return JSON.parse(datos)
}

function escribirJSON(ArrayDeProductos){
  let arrayJSON = JSON.stringify(ArrayDeProductos);
  fs.writeFileSync("./productos.json",arrayJSON);
}

function guardarProducto(nuevoProducto){
  let datosJSON = leerArchivo();
  datosJSON.push(nuevoProducto);
  escribirJSON(datosJSON);
  console.log('Producto nuevo guardado.')
}

function leerPorCategoria(propiedad, categoria){
  let todosLosProductos = leerArchivo();
  let coincidenConLaCategoria = todosLosProductos.filter(function(propiedad){
    return propiedad.categoria == categoria;
  })
  return coincidenConLaCategoria;
}



module.exports = {leerArchivo,guardarProducto, leerPorCategoria};