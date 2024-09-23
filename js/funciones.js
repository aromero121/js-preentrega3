// Valores de configuración
const porcentajeDescuento = 0.1 // 10% Descuento
const montoDescuento = 2000 // Monto de compra a partir de que se aplica el Descuento 

// Set de productos
const Producto_1 = "1 - Fideos Orecchiette Pugliesi 500 gr";
const Producto_2 = "2 - Pizza SANOSINHARINA 90 gr";
const Producto_3 = "3 - Ñoquis de Papa SPEZIA 750 gr";
const Producto_4 = "4 - Vino DON PASCUAL Tinto 750 ml";
const Producto_5 = "5 - Whisky JAMESON 1 L";

// Lista de precios de productos
const Precio_Prod_1 = 301;
const Precio_Prod_2 = 145;
const Precio_Prod_3 = 375;
const Precio_Prod_4 = 580;
const Precio_Prod_5 = 2700;

// Funciones
// Despliega la lista de productos con su precio y retorna el producto seleccionado
function desplegarProductos(cantidadItemsCompra,totalCompra) {
    let listaProductos = "Seleccione un producto:\n\n";   
    listaProductos += "==============================================\n";
    listaProductos += "         Menú de PRODUCTOS\n";
    listaProductos += "==============================================\n";
    listaProductos += "\n";
    listaProductos += Producto_1 + " - PRECIO: " + "[ $ " + Precio_Prod_1 + "]\n";
    listaProductos += "\n";
    listaProductos += Producto_2 + " - PRECIO: " + "[ $ " + Precio_Prod_2 + "]\n";
    listaProductos += "\n";
    listaProductos += Producto_3 + " - PRECIO: " + "[ $ " + Precio_Prod_3 + "]\n";
    listaProductos += "\n";
    listaProductos += Producto_4 + " - PRECIO: " + "[ $ " + Precio_Prod_4 + "]\n";
    listaProductos += "\n";
    listaProductos += Producto_5 + " - PRECIO: " + "[ $ " + Precio_Prod_5 + "]\n";
    listaProductos += "\n";
    listaProductos += "==============================================\n";
    listaProductos += "\n";
    listaProductos += "Ítems comprados: " + cantidadItemsCompra + " - Total comprado: $" + totalCompra.toFixed(2);
    listaProductos += "\n";

    let productoSeleccionado = parseInt(prompt(listaProductos));
    return productoSeleccionado;
}

// Dado un código de producto válido obtengo el precio
function obtenerPrecio(codigoProd) {
    let precio;

    switch (productoSeleccionado) {
        case 1:
            precio = Precio_Prod_1;
            break;
        case 2:
            precio = Precio_Prod_2;
            break;
        case 3:
            precio = Precio_Prod_3;
            break;
        case 4:
            precio = Precio_Prod_4;
            break;
        case 5:
            precio = Precio_Prod_5;
            break;
        default:
            alert("Producto no válido, por favor selecciona un número entre 1 y 4.");
            return 0; // Si la selección no es válida, retorna precio 0
    } 
     return precio;
  }

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

