document.querySelector("#reg_usuario").addEventListener('submit',validarformulario);

function validarformulario (evento) {evento.preventDefault();  
    let nombre= document.querySelector("#nombre").value;
    let apellido=document.querySelector("#apellido").value;
    let telefono=document.querySelector("#telefono").value;
    let email=document.querySelector("#email").value;
    let gridmail=document.querySelector("#gridmail").value;
    let gridtel=document.querySelector("#gridtel").value;
    let comentario=document.querySelector("#comentario").value;
    if (nombre.length ==0) {alert(" ingresa un nombre") ;return;}
    if (apellido.length ==0) {alert(" ingresa un apellido");return;}
    if (telefono==0) {alert(" ingresa un telefono valido");return;}
    if (email.length==0) {alert(" ingresa un email valido");return;}
    if (!(isNaN (telefono))) {if(!(telefono.length>8 && telefono.length<13){alert("ingrese un telefon valido");return;}}
    this.submit();
} 

const usuario= []

validarformulario.addEventListener("submit" , (evento)=>{evento.preventDefault()
    let nuevousuario={  nombre= nombre.value,
     apellido=apellido.value,
   telefono=telefono.value,
    email=email.value,
     gridmail=gridmail.value,
    gridtel=gridtel.value,
     comentario=comentario.value,}
usuario.push(nuevousuario);
localStorage.setitem("nuevousuario",JSON.stringify(usuario));
console.log(usuario);
})

nuevousuario();



