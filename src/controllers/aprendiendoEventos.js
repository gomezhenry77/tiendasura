let etiquetaBoton=document.getElementById("boton")
//PASOS PARA DETECTAR EVENTOS
etiquetaBoton.addEventListener("click",function(){
    console.log("estoy haciendo clic")
    let titulo=document.getElementById("titulo")
    titulo.textContent="Hola soy Henry"

    let titulo2=document.getElementById("titulo2")
    titulo2.textContent="mentiras van a ganar"

    titulo2.classList.add("text-danger")

    let imgFlores=document.getElementById("imgFlores")
    imgFlores.src="https://firebasestorage.googleapis.com/v0/b/tiendasurahagf.appspot.com/o/Tapete-de-flores.png?alt=media&token=64349247-3b98-47c9-b359-7ba8f72f652e"
})



