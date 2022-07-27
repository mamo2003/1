function pnombre(){
    let user = prompt("bienvenido!! Ingresa tu nombre por favor:");
    return user
}
user= pnombre();

let visitante= document.querySelector("#visitante");

let txtnombre = localStorage.getItem("number","txtnombre");

/* user.value= txtnombre;
user.addEventListener("click",()=>{ txtnombre=localStorage.setItem("txtnombre","nombre.value")}); */

visitante.innerHTML=`<strong>Bienvenido  ${user} Eres el visitante n°</strong> `;







/* let nombre = queryselector(nombre).value;
let visitante = queryselector("#visitante").innerhtml; */

/* window.onload(pnombre) */