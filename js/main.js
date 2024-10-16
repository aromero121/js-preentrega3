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

function cargarProductos() {
    const productosGuardados = localStorage.getItem("productos");
    if (productosGuardados) {
        return JSON.parse(productosGuardados).map(
            prod => new Producto(prod.idProducto, prod.nombreProducto, prod.precioProducto, prod.codigoBarras)
        );
    } else {
        let productosIniciales = [
            new Producto(1, "Fideos Orecchiette Pugliesi 500 gr", 301, "12356789"),
            new Producto(2, "Pizza SANOSINHARINA 90 gr", 145, "987654321"),
            new Producto(3, "Ñoquis de Papa SPEZIA 750 gr", 375, "77895123"),
            new Producto(4, "Vino DON PASCUAL Tinto 750 ml", 580, "900011123"),
            new Producto(5, "Whisky JAMESON 1 L", 2700, "567890123")
        ];
        
        localStorage.setItem("productos", JSON.stringify(productosIniciales));
        return productosIniciales;
    }
}


function mostrarProductos() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "<h3>Lista de Productos:</h3>";
    productos.forEach(producto => {
        resultado.innerHTML += `<p>${producto.idProducto}. ${producto.nombreProducto} - Precio: $${producto.precioProducto}</p>`;
    });
}


function verPrecioProducto() {
    let idProducto = prompt("Ingrese el ID del producto para ver su precio:");
    let productoEncontrado = productos.find(producto => producto.idProducto == idProducto);
    let resultado = document.getElementById("resultado");

    if (productoEncontrado) {
        resultado.innerHTML = `El precio del producto "${productoEncontrado.nombreProducto}" es de $ ${productoEncontrado.obtenerPrecio()}`;
    } else {
        resultado.innerHTML = "Producto no encontrado";
    }
}


function incrementarPrecioProducto() {
    let idProducto = prompt("Ingrese el ID del producto para incrementar su precio:");
    let productoParaIncrementar = productos.find(producto => producto.idProducto == idProducto);
    let resultado = document.getElementById("resultado");

    if (productoParaIncrementar) {
        let incremento = parseFloat(prompt("Ingrese el monto a incrementar:"));
        productoParaIncrementar.incrementarPrecio(incremento);
        localStorage.setItem("productos", JSON.stringify(productos));
        resultado.innerHTML = `El nuevo precio del producto "${productoParaIncrementar.nombreProducto}" es de $ ${productoParaIncrementar.obtenerPrecio()}`;
    } else {
        resultado.innerHTML = "Producto no encontrado";
    }
}

function procesarCompra() {
    let totalCompra = 0;
    let cantidadItemsCompra = 0;
    let continuaComprando = true;

    while (continuaComprando) {
        let idProducto = prompt("Ingrese el ID del producto que desea comprar:");
        let productoSeleccionado = productos.find(producto => producto.idProducto == idProducto);

        if (productoSeleccionado) {
            totalCompra += productoSeleccionado.obtenerPrecio();
            cantidadItemsCompra++;

            if (cantidadItemsCompra >= maxItemsCompra) {
                continuaComprando = false;
                break;
            }

            let continuar = prompt("¿Desea seguir comprando? (S/N)").toUpperCase();
            if (continuar !== "S") {
                continuaComprando = false;
            }
        } else {
            alert("Producto no válido.");
        }
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<h3>Resumen de la compra:</h3>
                           <p>Total de items: ${cantidadItemsCompra}</p>
                           <p>Total de la compra: $${totalCompra}</p>`;
}