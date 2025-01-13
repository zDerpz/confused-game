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

function checkCode() {
    const codigoInserido = document.getElementById("secretCode").value;

    if (codigoInserido == parseInt("070307")) {
        document.body.innerHTML = '<html><body><header><div class="header-content"><img src="Pictures/title.png" alt="Confused" class="title-logo"><nav><ul><li><a href="index.html">About</a></li><li><a href="images.html">Images</a></li><li><a href="download.html">Download</a></li><li><a href="contact.html">Contact</a></li></ul></nav></div></header><div class="container"><aside class="side-images"><img src="Pictures/side-image1.png" alt="Lateral Image 1"></aside><div class="content" id="conteudo"><main><section id="images" class="fade-in"><center><h2>Download</h2><a href="GC/ConfusedDEMO.rar" download="ConfusedDEMO.rar"><button>Download Windows 10/11</button></a></center></section></main></div><aside class="side-images"><img src="Pictures/side-image2.png" alt="Lateral Image 2"></aside></div><br><br><br><br><br><br><footer><p>&copy; 2024 Confused Game. All rights reserved.</p></footer></body></html>';
    } 
    else {
        alert("Wrong!");
    }
}
