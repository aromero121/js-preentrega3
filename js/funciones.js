// Valores de configuración
const porcentajeDescuento = 0.1 // 10% Descuento
const montoDescuento = 2000 // Monto de compra a partir de que se aplica el Descuento 

// Funciones
// Proporciona un detalle de lo comprado al finalizar la compra
function resumenCompra(importeTotalCompra, cantItems, cantItemsMax) {
    let importeDto;
    let importeTotalConDto;

    if (cantItems !== 0) {
        if (importeTotalCompra >= montoDescuento) {
            importeDto = importeTotalCompra * porcentajeDescuento;
            importeTotalConDto = importeTotalCompra - importeDto;
        } else {
            importeDto = 0;
            importeTotalConDto = importeTotalCompra;
        }

        mensaje = "Detalle de lo comprado:\n\n";
        mensaje += "Monto de la compra: $ " + importeTotalCompra.toFixed(2) + "\n";
        mensaje += "Monto del descuento: $ " + importeDto.toFixed(2) + "\n";
        mensaje += "Cantidad de ítems de la compra: " + cantItems + "\n";
        mensaje += "\n";
        mensaje += "Monto TOTAL a Pagar: $ " + importeTotalConDto.toFixed(2) + "\n";

        if (cantItems == cantItemsMax){
            mensaje+= "Su compra corresponde al máximo de ítems permitidos: " + cantItemsMax;
        }

        alert(mensaje);
    } else {
        alert("No se generó una compra!");
    }    
}

// Despliega las opciones del menú de productos a comprar
function desplegarListaProductos(cantidadItemsCompra,totalCompra,productos) {
    let listaProductos = "Seleccione un producto a comprar:\n\n";   
    listaProductos += "==============================================\n";
    listaProductos += "         Menú de PRODUCTOS\n";
    listaProductos += "==============================================\n";
    listaProductos += "\n";
    
    for (const producto of productos) {
        listaProductos +=  producto.idProducto + " - " + producto.nombreProducto +" - PRECIO: " + "[ $ " + producto.precioProducto.toFixed(2) + "]\n";
    }
    
    listaProductos += "\n";
    listaProductos += "==============================================\n";
    listaProductos += "\n";
    listaProductos += "Ítems comprados: " + cantidadItemsCompra + " - Total comprado: $" + totalCompra.toFixed(2);
    listaProductos += "\n";

    let productoSeleccionado = parseInt(prompt(listaProductos));
    return productoSeleccionado;
}

// Despliega las opciones del menú principal
function desplegarMenuOpciones() {
    let listaOpciones = "Seleccione un opción en el Menú:\n\n";   
    listaOpciones += "==============================================\n";
    listaOpciones += "         Menú de opciones\n";
    listaOpciones += "==============================================\n";
    listaOpciones += "\n";
    
    listaOpciones += "1 - Ver lista de productos a comprar\n";
    listaOpciones += "\n";
    listaOpciones += "2 - Ver precio de un producto\n";
    listaOpciones += "\n";
    listaOpciones += "3 - Incrementar precio de un producto\n";
    listaOpciones += "\n";
    listaOpciones += "4 - Desplegar lista de productos por PRECIO\n";
    listaOpciones += "\n";
    listaOpciones += "5 - Salir\n";
    listaOpciones += "\n";

    listaOpciones += "==============================================\n";
    listaOpciones += "    CoderHouse - JS - PreEntrega2 - [Grupo8 - Alejandro.Romero] ";
    listaOpciones += "==============================================\n";
    listaOpciones += "\n";

    let opcionSeleccionada = parseInt(prompt(listaOpciones));
    return opcionSeleccionada;
}


function desplegarProductosPorPrecio(productos){

    let productosPorPrecio = productos.slice();

    // Ordena el array de productos por precio de menor a mayor
    productosPorPrecio.sort(function(a, b) {
        return a.precioProducto - b.precioProducto;
    });

    let resultado = "Productos ordenados por precio (menor a mayor):\n\n";
    resultado += "==============================================\n\n";

    productosPorPrecio.forEach(producto => {
        resultado += `- ${producto.idProducto} - ${producto.nombreProducto}: $ ${producto.precioProducto}\n\n`;
    });
    
    resultado += "==============================================\n";
    alert(resultado);
}
