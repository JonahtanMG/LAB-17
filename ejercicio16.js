async function cargarUsuario(callback) {
    const tiempo = Math.floor(Math.random() * (1500 - 800 + 1)) + 800;

    const resultado = await new Promise((resolve) => {
        setTimeout(() => {
            const usuario = {
            id: 1,
            nombre: "Juan"
        };
            resolve(usuario);
        }, tiempo);
    });
    callback(resultado);
}

cargarUsuario((usuario) => {
    console.log("Usuario cargado: " + usuario.nombre + ", ID: " + usuario.id);
});