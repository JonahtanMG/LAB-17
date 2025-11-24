function validarEdad(edad) {
    if (isNaN(edad)) {
        throw new Error("No es un número");
    }
    if (edad < 0) {
        throw new Error("No puede ser negativa");
    }
    console.log("Edad válida: " + edad);
}

try {
    validarEdad(-1);
} catch (e) {
    console.log("Error: " + e.message);
}