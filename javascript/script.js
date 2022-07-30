// identificacion de usuario

let visitante = document.querySelector("#visitante");

function visita(){ let usuario = prompt("identificate");
return usuario
}
let usuario=visita();

visitante.onclick=() => visita();



let txtusuario=localStorage.setItem("usuario",usuario);
txtusuario = usuario;

visitante.addEventListener("change",() =>{txtusuario=localStorage.setItem("usuario",usuario)});  


// contador de clicks

let conteo = 0;
let suma=1;
let contado;
function contador(conteo,suma) { contado = conteo + suma;
  return contado
}

visitante.onclick=() => contador();


let numcontador= localStorage.setItem("contado",contado);
numcontador= contado;


visitante.innerHTML=`<p><strong>Bienvenida/o  ${usuario}, Eres el visitante n°  ${contado} de nuestra pagina</strong></p>`;

