function sendEmail(){
    let params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value
    }

    emailjs.send("service_hyo1f5a", "template_82x7xks", params)
    .then(function(response) {
        alert("Mensagem enviada com sucesso :)");
    })
    .catch(function(error) {
        alert("Ocorreu um erro ao enviar o email: " + error);
    });
}