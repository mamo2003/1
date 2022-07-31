// identificacion de usuario

function visita(){let usuario = prompt("identificate");
if(usuario === "")
{alert("debes escribir tu nombre, no puede estar vacio");
}return usuario
}
visita()

usuario=visita();

let visitante = document.querySelector("#visitante");

let txtusuario=localStorage.setItem(usuario,usuario);
txtusuario = usuario;
 let usuariorecupero= localStorage.getItem(usuario)

/* usuario.addEventListener("change",() =>{txtusuario=localStorage.setItem("usuario",usuario)}); */  


// contador de clicks
let numrecupero=parseInt(localStorage.getItem("contado"));
let conteo = 0
function contador() { let contado = conteo + 1;
return contado;
}
contador()

let contado=contador();

console.log(numrecupero)
console.log(contador())
let numcontador= localStorage.setItem("contado", (contado));


visitante.innerHTML=`<p><strong>Bienvenida/o  ${usuariorecupero}, Eres el visitante n°  ${contado} de nuestra pagina</strong></p>`;
visitante.onclick = () => visita() & contador();