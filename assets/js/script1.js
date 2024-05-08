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
function contraste(){
    let eBody = document.body;
    let colorBody = eBody.style.backgroundColor;
    let eH1 = document.getElementsByClassName("textoH1");
    let eInputs = document.getElementsByTagName("input");
    let eTextAreas = document.getElementsByTagName("textarea");
    //console.log(eInputs);
    //console.log(eInputs[1]);
    //const elementos = {...eInputs,...eTextAreas}
    //console.log(elementos);
    //console.log(elementos[0])
    if(colorBody=="black"){
        eBody.style.backgroundColor = "purple";
        for (let index = 0; index < eH1.length; index++) {
            const element = eH1[index];
            element.style.color = "purple";
        }
        for (let index = 0; index < eInputs.length; index++) {
            const element = eInputs[index];
            element.style.borderColor = "purple";
        }
        for (let index = 0; index < eTextAreas.length; index++) {
            const element = eTextAreas[index];
            element.style.borderColor = "purple";
        }
        //eH1.style.color = "purple";
    }else{
        eBody.style.backgroundColor = "black";
        for (let index = 0; index < eH1.length; index++) {
            const element = eH1[index];
            element.style.color = "black";
        }
        for (let index = 0; index < eInputs.length; index++) {
            const element = eInputs[index];
            element.style.borderColor = "black";
        }
        for (let index = 0; index < eTextAreas.length; index++) {
            const element = eTextAreas[index];
            element.style.borderColor = "black";
        }
        //eH1.style.color = "black";
    }
    
    
     
}