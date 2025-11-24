try{
    let numero = 0/0;
    if (isNaN(numero)) {
        throw new Error("Operación matemática inválida");
    }
} catch(e){
    console.log("Ocurrio un error: "+e.message);
}