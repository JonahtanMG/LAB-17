function procesarLista(lista, callback) {
    return new Promise((resolve) => {
        let pendientes = lista.length;

        lista.forEach((num) => {
            const tiempo = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;
            setTimeout(() => {
                pendientes--;
                console.log("Número procesado:", num);
                if (pendientes === 0) {
                    callback("Proceso completado");
                }
            }, tiempo)
        });
    });
}

procesarLista([1, 2, 3, 4]).then((msg) => {
    console.log(msg);
});