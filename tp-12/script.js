function agregarProducto(nombreProducto) {
    const listaProductos = document.getElementById('lista-productos');
    const li = document.createElement('li');
    li.innerHTML = `${nombreProducto} <button class="btn btn-sm btn-danger" onclick="eliminarProducto(this)">Eliminar</button>`;
    listaProductos.appendChild(li);
}

function handlerFormulario(e) {
    e.preventDefault();
    const input = e.target.querySelector('input');
    const nombreProducto = input.value.trim();
    if (nombreProducto) {
        agregarProducto(nombreProducto);
        input.value = "";
    }
}

function limpiarLista() {
    document.getElementById('lista-productos').innerHTML = '';
}

function ordenarLista() {
    const listaProductos = document.getElementById('lista-productos');
    const productos = Array.from(listaProductos.getElementsByTagName('li'));
    productos.sort((a, b) => a.textContent.localeCompare(b.textContent));
    listaProductos.innerHTML = '';
    productos.forEach(producto => listaProductos.appendChild(producto));
}

function eliminarProducto(button) {
    button.parentElement.remove();
}

document.getElementById('form-producto').addEventListener('submit', handlerFormulario);
