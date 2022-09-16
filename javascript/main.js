let visitante = document.querySelector("#visitante");

let conteo=0;
let contadoa=1;
let contadob=1;
let numcontador=contadob;


let numrecupero=parseInt(localStorage.getItem("contado"));
console.log(numrecupero);

function contador() { contadoa = conteo + contadoa;
}if(numrecupero > 0){ contadob = numrecupero + contadoa;
    numcontador=localStorage.setItem("contado",contadob);
    console.log("ok",contadob)
}

numcontador=localStorage.setItem("contado",contadob);

let usuario="";

function visita () {usuario = prompt("ingrese su nombre:");
if(usuario.length == 0) {alert("no ingreso un nombre , intentelo nuevamente");
let guardado=usuario;
guardado=localStorage.setItem("usuario",guardado);
}else{visitante.innerHTML=`<p><strong> Bienvenida/o  ${usuario} , Eres el visitante n° ${contadob} de nuestra pagina </strong></p>`;
    visitante.removeEventListener("click",visita)
} 
}

visitante.addEventListener("click",visita, contador);