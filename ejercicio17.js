async function dividirAsync(a, b, callback) {
    const resultado = await new Promise((resolve) => {
        setTimeout(() => {
        if (b === 0) {
            callback(new Error("No se puede dividir entre cero"), null);
        } else {
            callback(null, a / b);
        }
    }, 1500);
    });
    resolve(resultado);
}
//CASO CORRECTO
dividirAsync(10, 2, (err, resultado) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log("Resultado:", resultado);
    }
});
//CASO CON ERROR
dividirAsync(10, 0, (error, resultado) => {
    if (error) {
        console.error(error.message);
    } else {
        console.log("Resultado:", resultado);
    }
});