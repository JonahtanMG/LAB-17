function funcionNivel2() {
    try {
        console.log(x);
    } catch (e) {
        console.log("Nivel 2 atrapó el error:"+ e.message);
        throw e;
    }
}

function funcionNivel1() {
    try {
        funcionNivel2(); 

    } catch (e) {
        console.log("Nivel 1 recibió el error:"+ e.message);
        throw e;
    }
}

try {
    funcionNivel1();

} catch (e) {
    console.log("ERROR FINAL capturado en el nivel superior:"+ e.message);
}