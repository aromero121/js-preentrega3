// Valores de configuración
const maxItemsCompra = 10; // Corresponde al valor máximo de ítems que se puede comprar

// Definición de la clase Producto
class Producto {
    constructor(idProducto, nombreProducto, precioProducto, codigoBarras,stock) {
        this.idProducto = idProducto;
        this.nombreProducto = nombreProducto;
        this.precioProducto = precioProducto;
        this.codigoBarras = codigoBarras;
        this.stock = stock;
    }

    // Método para obtener el precio del producto
    obtenerPrecio() {
        return this.precioProducto;
    }

    // Método para incrementar el precio del producto
    incrementarPrecio(incremento) {
        this.precioProducto += incremento;
    }
}

// Array para almacenar los productos
let productos = [];

// Instancias de Producto
let producto_1 = new Producto(1, "Fideos Orecchiette Pugliesi 500 gr", 301, "12356789",10);
let producto_2 = new Producto(2, "Pizza SANOSINHARINA 90 gr", 145, "987654321",15);
let producto_3 = new Producto(3, "Ñoquis de Papa SPEZIA 750 gr", 375, "77895123",8);
let producto_4 = new Producto(4, "Vino DON PASCUAL Tinto 750 ml", 580, "900011123",4);
let producto_5 = new Producto(5, "Whisky JAMESON 1 L", 2700, "567890123",12);


// Se agregan todos los productos al array
productos.push(producto_1, producto_2, producto_3, producto_4, producto_5);

// Menú principal del sistema
let opcion = 0;
do {
    opcion = desplegarMenuOpciones();
    console.log("Opción seleccionada: " + opcion);
    
    switch(opcion) {
        case 1:

            let productoSeleccionado = 0;
            let totalCompra = 0;
            let cantidadItemsCompra = 0;
            let continuaComprando = true; 
            
            procesarCompra(continuaComprando,totalCompra,cantidadItemsCompra, productoSeleccionado);
            break;

        case 2:

            let idVerPrecio = prompt("Ingrese el ID del producto para ver su precio:");
            let productoEncontrado = productos.find(producto => producto.idProducto == idVerPrecio);
            
            if (productoEncontrado) {
                alert(`El precio del producto "${productoEncontrado.nombreProducto}" es de $ ${productoEncontrado.obtenerPrecio()}`);
            } else {
                alert("Producto no encontrado");
            }
            break;

        case 3:

            let idIncrementarPrecio = prompt("Ingrese el ID del producto para incrementar su precio:");
            let productoParaIncrementar = productos.find(producto => producto.idProducto == idIncrementarPrecio);
            
            if (productoParaIncrementar) {
                let incremento = parseFloat(prompt("Ingrese el monto a incrementar:"));
                productoParaIncrementar.incrementarPrecio(incremento);
                alert(`El nuevo precio del producto "${productoParaIncrementar.nombreProducto}" es de $ ${productoParaIncrementar.obtenerPrecio()}`);
            } else {
                alert("Producto no encontrado");
            }
            break;
  
        case 4:
            desplegarProductosPorPrecio(productos);
            break;
        case 5:

            alert("Saliendo del sistema...");
            break;

        default:

            alert("Opción no válida");
    }
} while(opcion !== 5);

function procesarCompra(continuaComprando,totalCompra,cantidadItemsCompra,productoSeleccionado){
    let importeConIva = 0;

    while (continuaComprando) {
        productoSeleccionado = desplegarListaProductos(cantidadItemsCompra,totalCompra,productos);   
        console.log(productoSeleccionado);

        switch (productoSeleccionado) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                let productoPrecio = productos.find(producto => producto.idProducto == productoSeleccionado);
                totalCompra += productoPrecio.obtenerPrecio();
                cantidadItemsCompra += 1;
                break;
            default:
                alert("Producto no válido, por favor selecciona un código de producto entre 1 y 5.");
     }
    
     console.log(totalCompra);
    
     // Preguntar si desea seguir comprando
     let continuar = prompt("¿Quieres agregar más productos a tu compra? (S/N)").toUpperCase();
     if ((continuar !== "S") || (maxItemsCompra == cantidadItemsCompra)) {
         continuaComprando = false;
         // Desplegar resumen de lo comprado
         resumenCompra(totalCompra, cantidadItemsCompra,maxItemsCompra);
     } 
 }
}
