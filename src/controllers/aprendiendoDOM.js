//PASOS PARA CONTROLAR UNA ETIQUETA DESDE JS

//1. CONTROLANDO EL CONTENIDO
let etiquetaTitulo=document.getElementById("titulo")
console.log(etiquetaTitulo);
//1.1 MANIPULANDO EL TEXTO DE LA ETIQUETA(ELEMENTO)
etiquetaTitulo.textContent="jefe usted es como mi padre"
//1.2 MANIPULANDO EL SRC
let etiquetaFoto=document.getElementById("foto")
etiquetaFoto.src="https://firebasestorage.googleapis.com/v0/b/tiendasurahagf.appspot.com/o/bater%C3%ADa.webp?alt=media&token=690d0737-3a3c-4b30-9a8f-7b44ad95208b"
etiquetaFoto.classList.add("d-block", "mx-auto")

//2. CONTROLANDO EL DISEÑO
let parrafo=document.getElementById("parrafo")
parrafo.textContent="en algún lugar de la mancha cuyo nombre no quiero acordarme"

//2.1 AGREGANDO UN ESTILO(CLASS)
//text-danger
parrafo.classList.add("text-danger", "fs-1", "text-center")

//2.2 QUITANDO UN ESTILO
parrafo.classList.remove("text-danger")

