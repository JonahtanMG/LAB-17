try {
    let x = null;
    x.nombre;
} catch (e) {
    if (e instanceof TypeError) {
        console.log("Se produjo un TypeError:");
        console.log("Mensaje:", e.message);

    } else {
        console.log("Error general:");
        console.log("Tipo:", e.name);
    }
}