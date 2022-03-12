/**
 * Esta variable almacena el elemento img de la bombilla
 */
let bulb = document.getElementById("bulb")

/**
 * Esta función cambia la ruta de la imagen de tal manera que se logre el efecto visual de encender de la bombilla
 */
const turnOn = () => {
  bulb.src = "./assets/img/bulb_on.png"
}

/**
 * Esta función cambia la ruta de la imagen de tal manera que se logre el efecto visual de apagar de la bombilla
 */
const turnOff = () => {
  bulb.src = "./assets/img/bulb_off.png"
}

/**
 * Esta variable almacena el switcher de encendido y apagado de la bombilla
 */
let switcher = document.getElementById("switcher")

/**
 * Se pone en escucha switcher para capturar si su estado ha cambiado
 */
switcher.addEventListener("change", checkSwitcher, false);

/**
 * Esta función chequea el estado del switcher para saber si se encuentra apagada o encendida, una vez confirmado el estado, procede a encender o apagar la bombilla
 */
function checkSwitcher() {
  var checked = switcher.checked;
  if (checked) {
    turnOn()
  } else {
    turnOff()
  }
}