function cargarUsuario() {
    return new Promise((resolve) => {
        const tiempo = Math.floor(Math.random() * (1500 - 800 + 1)) + 800;

        setTimeout(() => {
            const usuario = {
                id: 1,
                nombre: "Juan"
            };
            resolve(usuario);
        }, tiempo);
    });
}

cargarUsuario().then((usuario) => {
    console.log("Usuario cargado: " + usuario.nombre + ", ID: " + usuario.id);
});