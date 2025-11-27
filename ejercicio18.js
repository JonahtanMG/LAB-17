async function procesarLista(lista, callback) {
    let pendientes = lista.length;
    const resultado = await new Promise((resolve) => {
        lista.forEach((num) => {
            const tiempo = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;
            pendientes--;
            setTimeout(() => {
                console.log("Número procesado:", num);
                pendientes--;
                if (pendientes === 0) {
                    resolve("Proceso completado");
                }
            }, tiempo);
        });
    });
    callback(resultado);
}

procesarLista([1, 2, 3, 4], (mesaje) => {
    console.log(mesaje);
});