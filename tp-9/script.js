var personaEjemplo = {
    "apellido": "Perez",
    "nombre": "Juan",
    "edad": 20,
    "documento": 12345
};


/* Cree un objeto con el nombre Persona . */
function crearPersona(nombre, apellido, edad, documento) {
    return {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        documento: documento
    };
}
console.log("resultado crearPersona: ", crearPersona("Juan", "Pérez", 20, 123456));

// Agregar un campo 'apodo' al objeto 'persona' recibido.
function agregarApodo(persona, apodo) {
    persona.apodo = apodo;
    return persona;
}
console.log("resultado agregarApodo: ", agregarApodo(personaEjemplo, "JuanPe"));

/* Eliminar el campo 'documento' del objeto 'persona' recibido. */
function sinDocumento(persona) {
    let personaSinDocumento = { ...persona };
    delete personaSinDocumento.documento;
    return personaSinDocumento;
}
console.log("resultado sinDocumento: ", sinDocumento(personaEjemplo));

/* Muestra el nombre completo de la persona en el formato "Apellido, Nombre". */
function nombreCompletoDePersona(persona) {
    return `${persona.apellido}, ${persona.nombre}`;
}
console.log("resultado nombreCompletoDePersona: ", nombreCompletoDePersona(personaEjemplo));

// Incrementar la edad de la persona en uno.
function felizCumpleaños(persona) {
    persona.edad += 1;
    return persona;
}
console.log("resultado felizCumpleaños: ", felizCumpleaños(personaEjemplo));

/* Hago una funcion y verifico si dos personas son las mismas y compara si los campos son iguales */
function sonLaMismaPersona(persona1, persona2) {
    return persona1.nombre === persona2.nombre &&
           persona1.apellido === persona2.apellido &&
           persona1.edad === persona2.edad &&
           persona1.documento === persona2.documento;
}
console.log("resultado sonLaMismaPersona: ", sonLaMismaPersona(
    personaEjemplo,
    { apellido: "Perez", nombre: "Juan", edad: 20, documento: 12345 }
));
