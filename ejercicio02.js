try {
    let objetoJSON = "{nombre:juan}";
    let objeto = JSON.parse(objetoJSON);
    console.log("Objeto: "+objeto);
} catch (e) {
    console.log("Error: " + e.name)
    console.log(e.message)
}   