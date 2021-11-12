function registro(){
  var usuarioPredeterminado = "Sala4";
  var contraseñaPredeterminada = 2021;
  var user = document.getElementById('inputUsuario').value;
  var pass = document.getElementById('inputContraseña').value;
  if (user == usuarioPredeterminado & pass==contraseñaPredeterminada){
    alert("Bien hecho");
    if (pass == contraseñaPredeterminada){
      location.href="diario.html";}
  } else {
      alert("Intenta de nuevo");
    }
}
document.getElementById('salir').addEventListener('click',sal);

const span = document.getElementById('span');
let contador = 0;
function sal(){
  contador=contador+1;

  span.textContent = contador;
  if (contador === 3){
    location.href="index.html";
     }
   }
