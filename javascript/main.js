/* let visitante = document.querySelector("#visitante");
let usuario = "";

function visita(){ usuario = prompt("identificate");
while(usuario.length == 0)
{alert("debes escribir tu nombre, no puede estar vacio");
usuario = prompt("identificate");
}visitante.innerHTML=`<p><strong> Bienvenida/o  ${usuario} , Eres el visitante n°  ${contado}  de nuestra pagina </strong></p>`;
return usuario;
}
let usuarioreg="";

usuarioreg=usuario;


let txtusuario=localStorage.setItem("usuario",JSON.stringify (usuarioreg));
txtusuario = usuarioreg;
/* let usuarioreg=usuario;

let txtusuario=localStorage.setItem("usuario", usuarioreg);

txtusuario = usuarioreg; */

/* let usuariorecupero= localStorage.getItem("usuario"); */

/* console.log(usuarioreg); */

/* visitante.onclick = () => visita()  && contado() ; */
/* visitante.addEventListener("click",visita()) ; */


// contador de clicks
/* let numrecupero=parseInt(localStorage.getItem("contado"));
let conteo = 0 ;
let contado;
function contador() { let contado = conteo + 1;
if(numrecupero > 0){ contado= numrecupero + 1}
return contado;
}


let numcontador= localStorage.setItem("contado", JSON.stringify(contado));

/*  
function click(){
    if (usuario.length == 0); {
        visitante.onclick = () => visita()  && contador() ;
    }
/* visitante.removeEventListener("onclick");    */

/* 
visitante.onclick = () => visita()  && contador();   */ 
/* visitante.removeEventListener("onclick"); */ 

/* visitante.innerHTML=`<p><strong> Bienvenida/o  ${usuario} , Eres el visitante n°  ${contado}  de nuestra pagina </strong></p>`; */
// onclick y remove posterior al poseer un nombre de usuario

/* visitante.addEventListener("click",visita) ; */


/* visitante.addEventListener("click",visita()) ; */


/* visitante.onclick = () => visita()  && contador() ; */

/*  visitante.addEventListener("click",visita) ;  */
/*  visitante.innerHTML=`<p><strong> Bienvenida/o  ${usuario} , Eres el visitante n°  ${contado}  de nuestra pagina </strong></p>`; */

/* 
let visitante = document.querySelector("#visitante");
let usuarioreg="";
function visita(){usuarioreg = prompt("identificate");
while(usuario.length == 0)
{alert("debes escribir tu nombre, no puede estar vacio");
usuario = prompt("identificate");
let numrecupero=parseInt(localStorage.getItem("contado"));
let conteo = 0 ;
let contadoa;
function contador() { contadoa = conteo + 1;
if(numrecupero > 0){ contadoa = numrecupero + 1}
let numcontador= localStorage.setItem("contado", JSON.stringify(contadoa));
}return contadoa;}
visitante.innerHTML=`<p><strong> Bienvenida/o  ${usuarioreg} , Eres el visitante n°  ${contado}  de nuestra pagina </strong></p>`;
}return usuarioreg
}
let usuario=usuarioreg;
let txtusuario=localStorage.setItem("usuario",usuario);
txtusuario = usuario;
let usuariorecupero= localStorage.getItem("usuario");

// contador de clicks
/* let numrecupero=parseInt(localStorage.getItem("contado"));
let conteo = 0 ;
let contadoa;
function contador() { contadoa = conteo + 1;
if(numrecupero > 0){ contadoa = numrecupero + 1}
let numcontador= localStorage.setItem("contado", JSON.stringify(contadoa));
return contadoa;
} */

/* let numcontador= localStorage.setItem("contado", JSON.stringify(contado)); */

/* visitante.addEventListener("click", visita() ) */ 

/* visitante.innerHTML=`<p><strong> Bienvenida/o  ${usuariorecupero} , Eres el visitante n°  ${contado}  de nuestra pagina </strong></p>`; */
// onclick y remove posterior al poseer un nombre de usuario

/*     visitante.onclick = () => visita() && contado() ;
    visitante.innerHTML=`<p><strong> Bienvenida/o  ${usuario} , Eres el visitante n°  ${contado}  de nuestra pagina </strong></p>`; */

  
   
let visitante = document.querySelector("#visitante");

visitante.addEventListener("click",visita && contador );
let conteo=0;
let contadoa=1;
let contadob=1 ;
let numrecupero=parseInt(localStorage.getItem("contado"));
function contador() { contadoa = conteo + contadoa;
}if(numrecupero > 0){ contadob = numrecupero + contadoa;
}let numcontador=contadob;
numcontador=localStorage.setItem("contado",(contadob));

let usuario="";
function visita () { let usuario = prompt("ingrese su nombre:");
if(usuario.length == 0) {alert("no ingreso un nombre , intentelo nuevamente")
usuario= prompt("ingrese su nombre");
let guardado=usuario;
guardado=localStorage.setItem("usuario",usuario);
}else{visitante.innerHTML=`<p><strong> Bienvenida/o  ${usuario} , Eres el visitante n° ${contadob} de nuestra pagina </strong></p>`;
    visitante.removeEventListener("click",visita ,contador)} 
}

visitante.addEventListener("click",visita ,contador)  
