document.getElementById("form-register").addEventListener("submit", function(event){
    event.preventDefault();
    
    const valueEmail = document.getElementById("email").value;
    console.log("valor email", valueEmail )

    const valuePassword = document.getElementById("password").value;
    console.log("valor password", valuePassword)

    const valueConfirmation = document.getElementById("confirmation").value;
    console.log("valor confirmacion", valueConfirmation)

    const isCheck = document.getElementById("acepto").value;
    console.log("valor ckeck", isCheck)

    const sentData = {
        valueEmail, valuePassword, valueConfirmation, isCheck
    }

    console.log(sentData );
    
const requestOptions = {
    method : "POST", 
    headers : {
        'Content-Type' : "application/json"
    },
    body : JSON.stringify(sentData)
}


   fetch("https://d4d8-191-95-50-81.ngrok-free.app/v1/api/home/register", requestOptions).then(response => response.json()).then(data => alert( data.message
   ))


})




function clientHttp (){
console.log("llamado de funcion")
}