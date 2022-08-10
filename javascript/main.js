let visitante = document.querySelector("#visitante");

let conteo=0;
let contadoa=1;
let contadob;
let numcontador=contadob;
let numrecupero=parseInt(localStorage.getItem("contado"));
function contador() { contadoa = conteo + contadoa;
}if(numrecupero > 0){ contadob = numrecupero + contadoa;
}
numcontador=localStorage.setItem("contado",contadob);

let usuario="";
function visita () { let usuario = prompt("ingrese su nombre:");
if(usuario.length == 0) {alert("no ingreso un nombre , intentelo nuevamente")
usuario= prompt("ingrese su nombre");
let guardado=usuario;
guardado=localStorage.setItem("usuario",usuario);
}else{visitante.innerHTML=`<p><strong> Bienvenida/o  ${usuario} , Eres el visitante n° ${contadob} de nuestra pagina </strong></p>`;
    visitante.removeEventListener("click",visita ,contador)} 
}

visitante.addEventListener("click",visita ,contador);