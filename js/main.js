//Variables que se usarán
let registrosHTML = document.getElementById('registrosHTML');
let arrayRegistros=[];

//Comunicarse con el servidor
async function leerRegistros(){
    const respuesta = await fetch("data/registros.json");
    const registros = await respuesta.json();

    return registros;
}
//Se hace la función asincrona
async function muestraRegistros(){
    try {
        arrayRegistros = await leerRegistros();
    } catch (error) {
        console.log ("ERROR");
        console.log (error);
    }  
    //Mostrará los datos en la consola 
    console.log(arrayRegistros);
    //se imprime lo que se les está mandando a la URL
    arrayRegistros.forEach(function (item, index) {
        registrosHTML.innerHTML = registrosHTML.innerHTML +
         item.nombre + " " + item.apellido + " =>" + item.Telefono + 
         "<br>";
    });
}
//Llamar a la función
muestraRegistros();