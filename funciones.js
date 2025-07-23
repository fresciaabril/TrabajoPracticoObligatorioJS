function validar()
{
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const email = document.getElementById("email");
    const obraSoc = document.getElementById("obras_sociales");
    const dia = document.getElementById("dia");
    const mes = document.getElementById("mes");
    const anio = document.getElementById("anio");
    //NO SE UTILIZA
    const observaciones = document.getElementById("observaciones")


    if (nombre.value == ""){
        document.getElementById("nombre").style.border = "solid red";
    } else {
        document.getElementById("nombre").style.border = "solid 1px #cccccc";
    }


    if (apellido.value ==  ""){
        document.getElementById("apellido").style.border = "solid red";
    }else{
        document.getElementById("apellido").style.border = "solid 1px #cccccc";
    }


    if (email.value == ""){
        document.getElementById("email").style.border = "solid red";
    }else{
        document.getElementById("email").style.border = "solid 1px #cccccc";
    }


    if (obraSoc.value == ""){
        document.getElementById("obras_sociales").style.border = "solid red";
    }else{
        document.getElementById("obras_sociales").style.border = "solid 1px #cccccc";
    }


    if(dia.value == "" || dia.value < 0){
        document.getElementById("dia").style.border = "solid red";
    }else{
        document.getElementById("dia").style.border = "solid 1px #cccccc";
    }

    if (mes.value == "" || mes.value <= 0 || mes.value > 12) {
        document.getElementById("mes").style.border = "solid red"
    } else {
        document.getElementById("mes").style.border = "1px solid #cccccc";
    }

    if (anio.value == "" || anio.value <= 0) {
        document.getElementById("anio").style.border = "solid red"
    } else {
        document.getElementById("anio").style.border = "1px solid #cccccc";
    }


    //MES DE 31 DIAS
    if (mes.value == 1 || mes.value == 3 || mes.value == 5 || mes.value == 7 || mes.value == 8 || mes.value == 10 || mes.value == 12) {
        if(dia.value<=31 && dia.value>0){
            document.getElementById("dia").style.border = "solid #cccccc";
        }else{
            document.getElementById("dia").style.border = "solid red";
        }
    }


    //MES DE 30 DIAS
     else if(mes.value == 4 || mes.value == 6 || mes.value == 9 || mes.value == 11){
        if(dia.value<=30 && dia.value>0){
            document.getElementById("dia").style.border = "solid #cccccc";
        }else{
           document.getElementById("dia").style.border = "solid red";
        }
    }


    //ANIO BISIESTO
    else if(mes.value == 2){
        if(anio.value % 4 == 0){
            if(dia.value<=29 && dia.value>0 && anio.value>0){
                document.getElementById("dia").style.border = "1px solid #cccccc";
            }else{
                document.getElementById("dia").style.border = "solid red";
            }
        

        }else {
            if(dia.value<28 && dia.value>0 && anio.value>0){
                document.getElementById("dia").style.border = "1px solid #cccccc";
            }else{
              document.getElementById("dia").style.border = "solid red";
            }
        }
    }

    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (emailRegex.test(email.value)) {
        document.getElementById("email").style.border = "1px solid #cccccc";
    }else{
         document.getElementById("email").style.border = "solid red";
     }
}

