
//  Valores de configuración
const maxItemsCompra = 10; // Corresponde al valor máximo de ítems que se puede comprar

let continuaComprando = true; 
let productoSeleccionado = 0;
let totalCompra = 0;
let cantidadItemsCompra = 0; 

while (continuaComprando) {
    productoSeleccionado = desplegarProductos(cantidadItemsCompra,totalCompra);

    console.log(productoSeleccionado);

    switch (productoSeleccionado) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            totalCompra += obtenerPrecio(productoSeleccionado);
            cantidadItemsCompra += 1;
            break;
        default:
            alert("Producto no válido, por favor selecciona un código de producto entre 1 y 5.");
    }
    
    console.log(totalCompra);
    
    // Preguntar si desea seguir comprando
    let continuar = prompt("¿Quieres agregar más productos? (S/N)").toUpperCase();
    if ((continuar !== "S") || (maxItemsCompra == cantidadItemsCompra)) {
        continuaComprando = false;
        // Desplegar resumen de lo comprado
        resumenCompra(totalCompra, cantidadItemsCompra,maxItemsCompra);
    } 
}
