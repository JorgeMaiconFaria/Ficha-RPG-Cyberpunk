/*---ATTRIBUTES TABLE'S SCRIPT*/

function calcStr() {
    var str = document.getElementById('force').value;
    var strMod = document.getElementById('force-mod').value;
    return document.getElementById('force-total').innerHTML = Math.floor((parseInt(str) + parseInt(strMod)));};

function calcAgil() {
    var agil = document.getElementById('agil').value;
    var agilMod = document.getElementById('agil-mod').value;
    return document.getElementById('agil-total').innerHTML = Math.floor((parseInt(agil) + parseInt(agilMod)));};

function calcInt() {
    var int = document.getElementById('int').value;
    var intMod = document.getElementById('int-mod').value;
    return document.getElementById('int-total').innerHTML = Math.floor((parseInt(int) + parseInt(intMod)));};

function calcTH() {
    var tH = document.getElementById('tec.hab').value;
    var tHMod = document.getElementById('tec.hab-mod').value;
    return document.getElementById('tec-hab-total').innerHTML = Math.floor((parseInt(tH) + parseInt(tHMod)));};

function calcCool() {
    var cool = document.getElementById('cool').value;
    var coolMod = document.getElementById('cool-mod').value;
    return document.getElementById('cool-total').innerHTML = Math.floor((parseInt(cool) + parseInt(coolMod)));};

const spanPlayer = document.getElementById('spanPlayer');
const spanAge = document.getElementById('spanAge');
const spanFac = document.getElementById('spanFac');


/*---LOCAL STORAGE SCRIPTS */

const form = document.getElementById('form-status')

const handleSubmit = (event) => {
    event.preventDefault();
    console.log(calcStr());
    console.log(calcAgil());
    console.log(calcInt());
    console.log(calcTH());
    console.log(calcCool());
}

form.addEventListener('submit', handleSubmit);

window.onload = () => {
    const playerName = localStorage.getItem('player');
    const playerAge = localStorage.getItem('age');
    const playerFac = localStorage.getItem('fac');

    spanPlayer.innerHTML = playerName;
    spanAge.innerHTML = playerAge;
    spanFac.innerHTML = playerFac;
};