async function cargarMensaje(callback) {
    const resultado = await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Mensaje cargado");
        }, 1000);
    });

    callback(resultado);
}

cargarMensaje((mensaje) => {
    console.log("Async/Await recibió: " + mensaje);
});