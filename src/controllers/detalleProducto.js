console.log("hola estoy detallando la compra");

//llamar a la memoria

//JSON.parse es la forma de cambiar el string a objeto de nuevo
let producto=JSON.parse(localStorage.getItem("producto"))
console.log(producto)

// referenciar la imagen del producto
let foto=document.getElementById("imagenInfo")
foto.src=producto.foto

let nombre=document.getElementById("nombreInfo")
nombre.textContent=producto.nombre

let descripcion=document.getElementById("descripcionInfo")
descripcion.textContent=producto.descripcion

let precio=document.getElementById("precioInfo")
precio.textContent=producto.precio
