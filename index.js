const main = () => {
}

function enviarInfo() {
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var asunto = document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;

    if ((nombre =="") || (correo =="") || (asunto =="") || (mensaje =="")) {
        if(nombre==""){
            alert ("Debes digitar el nombre")
        }
        if(correo==""){
            alert ("Debes digitar el correo")
        }
        if(asunto==""){
            alert ("Debes digitar el asunto")
        }
        if(mensaje==""){
            alert ("Debes digitar el mensaje")
        }
        if(nombre=="" & correo=="" ){
            alert ("Debes digitar el nombre y el correo")
        }
        if(nombre=="" & asunto=="" ){
            alert ("Debes digitar el nombre y el asunto")
        }
        if(nombre=="" & mensaje =="" ){
            alert ("Debes digitar el nombre y el mensaje")
        }
        if(correo=="" & asunto==""){
            alert ("Debes digitar el correo y el asunto")
        }
        if(correo=="" & mensaje ==""){
            alert ("Debes digitar el correo y el mensaje")
        }
        if(asunto=="" & mensaje ==""){
            alert ("Debes digitar el asunto y el mensaje")
        }
    } else {
        alert("Nombre: " + nombre + "\nCorreo: " + correo + " " + "\nAsunto: " + asunto + "\nMensaje: " + mensaje);
        console.log("Nombre: " + nombre + "\nCorreo: " + correo + " " + "\nAsunto: " + asunto + "\nMensaje: " + mensaje);
    }

}

function borrarInfo() {
    var nombre = document.getElementById("nombre").value = " ";
    var correo = document.getElementById("correo").value = " ";
    var asunto = document.getElementById("asunto").value = " ";
    var mensaje = document.getElementById("mensaje").value= " ";

    alert("La información fué borrada correctamente");
    console.log("Nombre: " + nombre + "\nCorreo: " + correo + " " + "\nAsunto: " + asunto + "\nMensaje: " + mensaje)
}