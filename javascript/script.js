function identificarusuario(){
    let usuario = prompt("Ingrese su nombre para identificarse");
    if (usuario < 0) {"No puede quedar vacio, registre su nombre por favor"  
    }
    return usuario
}
usuario= identificarusuario();

let visitante= document.querySelector("#visitante");

let txtnombre = localStorage.getItem("usuario","usuario");


function contador(){
    for (let contari = 0; contari < (identificarusuario() != 0); contari++) {
    contari += 1;
    } return contari
}
contari= parseInt(document.querySelector("#contari"));

let txtcontar = localStorage.getItem("contari","contari");

/* user.value= txtnombre;
user.addEventListener("click",()=>{ txtnombre=localStorage.setItem("txtnombre","nombre.value")}); */

visitante.innerHTML=`<strong>Bienvenido  ${usuario} ,  Eres el visitante n° ${contador()} </strong> `;



/* let nombre = queryselector(nombre).value;
let visitante = queryselector("#visitante").innerhtml; */

/* window.onload(pnombre) */