function limpiarErrores(){
    var errores = document.getElementsByClassName("error");
    for(var i = 0; i < errores.length; i++){
        errores[i].innerHTML = "";
      }
}

function validar (formulario){

    limpiarErrores();

    if (formulario.email.value.trim().length == 0) {
        document.getElementById("id-error-email").innerText = "Campo obligatorio";
        formulario.email.focus();
        return false;
      }

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(formulario.email.value)) {
        document.getElementById("id-error-email").innerHTML = "campo invalido, utiliza @dominio";
        formulario.email.focus();
        return false;        
    }

    if (formulario.password.value.trim().length < 9) {
        document.getElementById("id-error-password").innerText = "Campo inválido, minimo 9 caracteres";
        formulario.password.focus();
        return false;
      }

    alert("Datos enviados");
    return true;

    limpiarErrores();
}
