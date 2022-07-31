let visitante = document.querySelector("#visitante");

function visita(){let usuario = prompt("identificate");
while(usuario.length == 0)
{alert("debes escribir tu nombre, no puede estar vacio");
usuario = prompt("identificate");
}return usuario
}
usuario=visita();
let txtusuario=localStorage.setItem("usuario",usuario);
txtusuario = usuario;
let usuariorecupero= localStorage.getItem("usuario");
// onclick y remove posterior al poseer un nombre de usuario
function click(){
if (usuario.lenght == 0); {
visitante.onclick = () => visita() && contado() ;
}visitante.removeEventListener(onclick);    
}
// contador de clicks
let numrecupero=parseInt(localStorage.getItem("contado"));
let conteo = 0 ;
function contador() { let contado = conteo + 1;
if(numrecupero > 0){ contado= numrecupero + 1}
return contado;
}
let contado=contador();
let numcontador= localStorage.setItem("contado", (contado));

visitante.innerHTML=`<p><strong> Bienvenida/o  ${usuariorecupero} , Eres el visitante n°  ${contado}  de nuestra pagina </strong></p>`;
