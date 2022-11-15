function moverPosicionRandom(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeigth) + "px";
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + "px";
}

let btnsi = document.getElementById("btn_si");
let btnno = document.getElementById("btn_no")
let modosexo = document.getElementsByClassName("modosexo")[0];
let triste = document.getElementById("triste");
let video = document.getElementsByClassName("video")[0];
let h1 = document.getElementById("h1");


btnno.addEventListener("mouseenter", function(e) { moverPosicionRandom(e.target) 
    if(btnno.addEventListener("click", function(e){
        alert("pudimos ser mucho mas :(")
        triste.style.display = "block"
        btnno.style.display = "none"
        btnsi.style.display = "none"
        video.style.display = "none"
        h1.style.display = "none"
        const cancionTriste = new Audio("audio\\piano-triste-1-.mp3");
        cancionTriste.play()
    })){

    }
});


btnsi.addEventListener("click", function(e) {
    alert("Sabía que dirías que SÍ. Casemonos ya y tengamos hijos. TE AMO!!!! ❤️");

    modosexo.style.display = "block";
    const cancion = new Audio("audio\\img_modo_hot.mp3");
    cancion.play();
    btnno.style.display = "none"
    btnsi.style.display = "none"
    video.style.display = "none"
    h1.style.display = "none"
})