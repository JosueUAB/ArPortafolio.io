
function abrirCerrarMenu(){    
    if(visible==false){
        document.getElementById("nav").className = "responsive";
        visible = true;
    }else{
        document.getElementById("nav").className = "";
        visible = false;
    }
    
}
// script.js
function abrirCerrarMenu() {
    var nav = document.getElementById("nav");
    nav.classList.toggle("mostrar");
    console.log("Menú clicado"); // Agrega esto para verificar que se está llamando
  }
  
