function validar(){
    validarVacio("nombre");
    validarVacio("email");
    validarVacio("asunto");
    validarVacio("mensaje");
    validarLongitud("telefono",9)
}
function validarVacio(idCampo){
    let elemento = document.getElementById(idCampo);//Recupera el elemento
    console.log(elemento);
    let valor = elemento.value; //Recupera el valor del elemento si es un input
    console.log(valor);
    console.log(valor.length);
    let valorSinEspacios = valor.trim();
    console.log(valorSinEspacios.length);
    let eParrafoValor = document.getElementById("p"+idCampo);
    if(valorSinEspacios==""){
        console.log("Esta vacio");
        elemento.style.borderColor = "red";
        eParrafoValor.style.display = "block";
    }else{
        console.log("Tiene algo");
        elemento.style.borderColor = "green";
        eParrafoValor.style.display = "none";
    }
}
function validarLongitud(idCampo,max){
    let elemento = document.getElementById(idCampo);//Recupera el elemento
    console.log(elemento);
    let valor = elemento.value; //Recupera el valor del elemento si es un input
    console.log(valor);
    console.log(valor.length);
    let valorSinEspacios = valor.trim();
    console.log(valorSinEspacios.length);
    let eParrafoValor = document.getElementById("p"+idCampo);
    if(valorSinEspacios.length==0 || valorSinEspacios.length==max){
        console.log("Cumple");
        elemento.style.borderColor = "green";
        eParrafoValor.style.display = "none";
        
    }else{
        console.log("No cumple");
        elemento.style.borderColor = "red";
        eParrafoValor.style.display = "block";
    }
}