function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

}
function seleccionarMascotaJugador(){
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('Capipepo')
    let inputRatigueya = document.getElementById('Ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')
    
    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML = 'Hipodoge'
    }else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = 'Capipeyo'
    }else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = 'Ratigueya'
    }else{
        alert('No has seleccionado Mascota')
    }    
    seleccionarMascotaEnemigo()
}
function seleccionarMascotaEnemigo(){ 
    let pc = aleatorio(1,3)
    let spanMascotaRival = document.getElementById('mascota-rival')
    
    if (pc === 1) {
        //inputHipodoge.checked = true;
        spanMascotaRival.innerHTML = 'Hipodoge'
    } else if (pc === 2) {
       // inputCapipepo.checked = true;
        spanMascotaRival.innerHTML = 'Capipepo'
    } else if (pc === 3) {
        //inputRatigueya.checked = true;
        spanMascotaRival.innerHTML = 'Ratigueya'
    }
}
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)+min)
}

window.addEventListener('load', iniciarJuego)   