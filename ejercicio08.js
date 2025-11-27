function cargarUsuario(callback) {
    const tiempo = Math.floor(Math.random() * (1500 - 800 + 1)) + 800;

    setTimeout(() => {
        const usuario = {
            id: 1,
            nombre: "Juan"
        };
        callback(usuario);
    }, tiempo);
}

cargarUsuario((usuario) => {
    console.log("Usuario cargado: " + usuario.nombre + ", ID: " + usuario.id);
});