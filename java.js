document.querySelector("#add").addEventListener("click", () =>{
    document.querySelector(".tela1").style.display = "none";
    document.querySelector(".tela2").style.display = "flex";
})
document.querySelector(".enviar").addEventListener("click", () =>{
    document.querySelector(".tela1").style.display = "flex";
    document.querySelector(".tela2").style.display = "none";
})