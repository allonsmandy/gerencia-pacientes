
var btnExcluir = document.getElementById("excluir");
var tabela = document.querySelector("table");

btnExcluir.addEventListener("click", function(event) {
     event.target.parentNode.parentNode.classList.add("sumiu");

     setTimeout(function() {
          event.target.parentNode.parentNode.remove();
     }, 500);
})
