// Valores de configuración
const maxItemsCompra = 10;

// Clase Producto
class Producto {
    constructor(idProducto, nombreProducto, precioProducto, codigoBarras, stock) {
        this.idProducto = idProducto;
        this.nombreProducto = nombreProducto;
        this.precioProducto = precioProducto;
        this.codigoBarras = codigoBarras;
    }

    obtenerPrecio() {
        return this.precioProducto;
    }

    incrementarPrecio(incremento) {
        this.precioProducto += incremento;
    }
}

let productos = cargarProductos();