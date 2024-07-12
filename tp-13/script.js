let contactos = [
    {
        nombre: 'Juan',
        apellido: 'Perez',
        telefono: '123456789',
        favorito: false
    },
];

function agregarContacto(nombre, apellido, telefono) {
    contactos.push({
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        favorito: false
    });
    mostrarListado();
}

function mostrarListado(favoritos = false) {
    const listaContactos = document.getElementById('lista-contactos');
    listaContactos.innerHTML = '';
    
    const contactosMostrar = favoritos ? contactos.filter(contacto => contacto.favorito) : contactos;

    contactosMostrar.forEach(contacto => {
        const li = document.createElement('li');
        li.innerHTML = `${contacto.nombre} ${contacto.apellido} - ${contacto.telefono} 
            <button class="btn btn-sm btn-danger" onclick="eliminarContacto('${contacto.nombre}', '${contacto.apellido}')">Eliminar</button>
            <button class="btn btn-sm btn-warning" onclick="marcarFavorito('${contacto.nombre}', '${contacto.apellido}')">Favorito</button>`;
        listaContactos.appendChild(li);
    });
}

function handlerFormulario(e) {
    e.preventDefault();
    const inputNombre = e.target.querySelector('#input-nombre');
    const inputApellido = e.target.querySelector('#input-apellido');
    const inputTelefono = e.target.querySelector('#input-telefono');

    const nombre = inputNombre.value.trim();
    const apellido = inputApellido.value.trim();
    const telefono = inputTelefono.value.trim();

    if (nombre && apellido && telefono) {
        agregarContacto(nombre, apellido, telefono);
        inputNombre.value = '';
        inputApellido.value = '';
        inputTelefono.value = '';
    }
}

function ordenarPor(campo) {
    contactos.sort((a, b) => a[campo].localeCompare(b[campo]));
    mostrarListado();
}

function eliminarContacto(nombre, apellido) {
    contactos = contactos.filter(contacto => contacto.nombre !== nombre || contacto.apellido !== apellido);
    mostrarListado();
}

function marcarFavorito(nombre, apellido) {
    const contacto = contactos.find(contacto => contacto.nombre === nombre && contacto.apellido === apellido);
    if (contacto) {
        contacto.favorito = !contacto.favorito;
    }
    mostrarListado();
}

function mostrarFavoritos() {
    mostrarListado(true);
}

function mostrarTodos() {
    mostrarListado();
}

document.getElementById('form-contacto').addEventListener('submit', handlerFormulario);

// Mostrar la lista inicial
mostrarListado();
