function dividirAsync(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (b === 0) {
                reject(new Error("No se puede dividir entre cero"));
            } else {
                resolve(a / b);
            }
        }, 1500);
    });
}

//CASO CORRECTO
dividirAsync(10, 2)
    .then((resultado) => {
        console.log("Resultado:", resultado);
    })
    .catch((err) => {
        console.error(err.message);
    });

//CASO CON ERROR
dividirAsync(10, 0)
    .then((resultado) => {
        console.log("Resultado:", resultado);
    })
    .catch((err) => {
        console.error(err.message);
    });