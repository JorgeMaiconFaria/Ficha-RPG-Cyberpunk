/*---ATTRIBUTES TABLE'S SCRIPT*/

function calcStr() {
    var str = document.getElementById('force').value;
    var strMod = document.getElementById('force-mod').value;
    document.getElementById('force-total').innerHTML = Math.floor((parseInt(str) + parseInt(strMod)));};

function calcAgil() {
    var agil = document.getElementById('agil').value;
    var agilMod = document.getElementById('agil-mod').value;
    document.getElementById('agil-total').innerHTML = Math.floor((parseInt(agil) + parseInt(agilMod)));};

function calcInt() {
    var int = document.getElementById('int').value;
    var intMod = document.getElementById('int-mod').value;
    document.getElementById('int-total').innerHTML = Math.floor((parseInt(int) + parseInt(intMod)));};

function calcTH() {
    var tH = document.getElementById('tec.hab').value;
    var tHMod = document.getElementById('tec.hab-mod').value;
    document.getElementById('tec-hab-total').innerHTML = Math.floor((parseInt(tH) + parseInt(tHMod)));};

function calcCool() {
    var cool = document.getElementById('cool').value;
    var coolMod = document.getElementById('cool-mod').value;
    document.getElementById('cool-total').innerHTML = Math.floor((parseInt(cool) + parseInt(coolMod)));};