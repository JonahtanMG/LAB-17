try {
    let x = null;
    x.nombre;
} catch (e) {
    console.log("Tipo de error:", e.name);
    console.log("Mensaje:", e.message);
}