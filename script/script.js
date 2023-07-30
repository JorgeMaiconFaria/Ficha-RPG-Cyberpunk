/*--- ATTRIBUTES TABLE'S SUM SCRIPT ---*/
function calcStr() {
    var str = document.getElementById('force').value;
    var strMod = document.getElementById('force-mod').value;
    document.getElementById('force-total').innerHTML = Math.floor((parseInt(str) + parseInt(strMod)));
    return Math.floor((parseInt(str) + parseInt(strMod)));};

function calcAgil() {
    var agil = document.getElementById('agil').value;
    var agilMod = document.getElementById('agil-mod').value;
    document.getElementById('agil-total').innerHTML = Math.floor((parseInt(agil) + parseInt(agilMod)));
    return Math.floor((parseInt(agil) + parseInt(agilMod)));};

function calcInt() {
    var int = document.getElementById('int').value;
    var intMod = document.getElementById('int-mod').value;
    document.getElementById('int-total').innerHTML = Math.floor((parseInt(int) + parseInt(intMod)));
    return Math.floor((parseInt(int) + parseInt(intMod)));};

function calcTH() {
    var tH = document.getElementById('tec-hab').value;
    var tHMod = document.getElementById('tec-hab-mod').value;
    document.getElementById('tec-hab-total').innerHTML = Math.floor((parseInt(tH) + parseInt(tHMod)));
    return Math.floor((parseInt(tH) + parseInt(tHMod)));};

function calcCool() {
    var cool = document.getElementById('cool').value;
    var coolMod = document.getElementById('cool-mod').value;
    document.getElementById('cool-total').innerHTML = Math.floor((parseInt(cool) + parseInt(coolMod)));
    return Math.floor((parseInt(cool) + parseInt(coolMod)));};

function cyberdeckdiv(){
    const intTotal = document.getElementById('int-total').innerHTML
    let cyberdeck = document.getElementById('cyberdeck')
    if (intTotal >= 3) {
        cyberdeck.style.display = 'inline-block'
    } else {cyberdeck.style.display = 'none'}};

/*--- MEMORY RAM ATTRIBUTES AND VALUES SCRIPTS ---*/

function calcRam(){
    var intTotal = document.getElementById('int-total').innerHTML;
    document.getElementById('ram-total').innerHTML = Math.floor((parseInt(intTotal) * 1.5))
    let totalRam = Math.floor((parseInt(intTotal) * 1.5));
    return totalRam;
};

let count = 0;

function removeRam(){
    let ramAtual = parseInt(document.getElementById('ram-atual').innerHTML);
    let ramTotal = parseInt(document.getElementById('ram-total').innerHTML);
    if (ramAtual >= 1){count--}
    document.getElementById('ram-atual').innerHTML = count;
}

function addRam(){
    let ramAtual = parseInt(document.getElementById('ram-atual').innerHTML);
    let ramTotal = parseInt(document.getElementById('ram-total').innerHTML);
    if(ramAtual <= (ramTotal - 1)){count++}
    document.getElementById('ram-atual').innerHTML = count;
};

let btnUpRam = document.querySelector('#crescer')
let btnDownRam = document.querySelector('#descer')

let sound = new Audio();
let clickSound = new Audio();
let tapaSound = new Audio();
sound.src = "./souds/sound1.mp3"
clickSound.src = "./souds/click.mp3"
tapaSound.src = "./souds/um-tapa.mp3"


//btnUpRam.addEventListener('click', );
//btnDownRam.addEventListener('click', );





/*--- DOM ELEMENTS---*/
const spanPlayer = document.getElementById('spanPlayer');
const spanAge = document.getElementById('spanAge');
const spanFac = document.getElementById('spanFac');
const form = document.getElementById('form-status');
const h1 = document.querySelector('h1');

const cortex = document.getElementById('cortex');
const sisVisual = document.getElementById('sistema-visual');
const circulatorio = document.getElementById('sistema-circulatorio');
const tegumentar = document.getElementById('sistema-tegumentar');
const esqueletoT = document.getElementById('esqueleto');
const mao = document.getElementById('mao');
const braco = document.getElementById('braços');
const pernas = document.getElementById('pernas');

const hack1 = document.getElementById('hack1');
const hack2 = document.getElementById('hack2');
const hack3 = document.getElementById('hack3');

const ramAtual = document.getElementById('ram-atual');
const ramTotal = document.getElementById('ram-total');

const imputPrimaria = document.querySelector('#primaria');
const imputSecundaria = document.querySelector('#secundaria');
const imputmochila = document.getElementById('mochila');

const str = document.getElementById('force');
const strMod = document.getElementById('force-mod');
const agil = document.getElementById('agil');
const agilMod = document.getElementById('agil-mod')
const int = document.getElementById('int');
const intMod = document.getElementById('int-mod');
const tH = document.getElementById('tec-hab');
const tHMod = document.getElementById('tec-hab-mod');
const cool = document.getElementById('cool');
const coolMod = document.getElementById('cool-mod');

/*---LOCAL STORAGE SCRIPTS */


function playsound(option) {
    if (option == "1") 
     {sound.play()}
   else if(option == "2") 
     {clickSound.play()}
     else if(option == "3")
     {tapaSound.play()}  
};

let countTapas = 0;
function easterEgg(){
    countTapas += 1
    if(countTapas == 7 || countTapas == 77)
    { playsound(3)}
}



const resetar = function() {
    let text = "Deseja apagar a sua ficha?\nNão é possivel desfazer a ação!";
    if (confirm(text) == true) {
    localStorage.clear();
    window.location = 'index.html'}
};

const handleSubmit = (event) => {
    event.preventDefault();
    playsound("1");
    localStorage.setItem('prima', imputPrimaria.value);
    localStorage.setItem('second', imputSecundaria.value);
    localStorage.setItem('mochila', imputmochila.value);    
    localStorage.setItem('str1', str.value);
    localStorage.setItem('str2', strMod.value);
    localStorage.setItem('agil1', agil.value);
    localStorage.setItem('agil2', agilMod.value);
    localStorage.setItem('int1', int.value);
    localStorage.setItem('int2', intMod.value);
    localStorage.setItem('tH1', tH.value);
    localStorage.setItem('tH2', tHMod.value);
    localStorage.setItem('cool1', cool.value);
    localStorage.setItem('cool2', coolMod.value);
    localStorage.setItem('hack1', hack1.value);
    localStorage.setItem('hack2', hack2.value);
    localStorage.setItem('hack3', hack3.value);
    
    localStorage.setItem('strTotal', calcStr());
    localStorage.setItem('agilTotal', calcAgil());
    localStorage.setItem('intTotal', calcInt());
    localStorage.setItem('tecHabTotal', calcTH());
    localStorage.setItem('coolTotal', calcCool());

    var cortexText = cortex.options[cortex.selectedIndex].text;
    localStorage.setItem('cortexS', cortexText);
    
    var sisVisualTxt = sisVisual.options[sisVisual.selectedIndex].text;
    localStorage.setItem('visual', sisVisualTxt);

    var circTxt = circulatorio.options[circulatorio.selectedIndex].text;
    localStorage.setItem('circulatorio', circTxt);

    var sistTegum = tegumentar.options[tegumentar.selectedIndex].text;
    localStorage.setItem('tegumentar', sistTegum);

    var esqueletoTxt = esqueletoT.options[esqueletoT.selectedIndex].text;
    localStorage.setItem('esqueleto', esqueletoTxt);

    var maoTxt = mao.options[mao.selectedIndex].text;
    localStorage.setItem('mao', maoTxt);

    var braçosTxt = braco.options[braco.selectedIndex].text;
    localStorage.setItem('braços', braçosTxt);

    var pernasTxt = pernas.options[pernas.selectedIndex].text;
    localStorage.setItem('pernasT', pernasTxt);

};
    
/*--- OTHER BUTTONS ---*/
form.addEventListener('reset', resetar);
form.addEventListener('submit', handleSubmit);
window.addEventListener('click', cyberdeckdiv)
window.addEventListener('click', calcRam)

/*--- ALL FUNCTIONS REQUIRES TO RELOAD THE PAGE ---*/

window.onload = () => {
    const playerName = localStorage.getItem('player');
    const playerAge = localStorage.getItem('age');
    const playerFac = localStorage.getItem('fac');

    document.getElementById('force-total').innerHTML = localStorage.getItem('strTotal');
    document.getElementById('agil-total').innerHTML = localStorage.getItem('agilTotal');
    document.getElementById('int-total').innerHTML = localStorage.getItem('intTotal');
    document.getElementById('tec-hab-total').innerHTML = localStorage.getItem('tecHabTotal');
    document.getElementById('cool-total').innerHTML = localStorage.getItem('coolTotal');

    cortex.options[cortex.selectedIndex].text = localStorage.getItem('cortexS');
    sisVisual.options[sisVisual.selectedIndex].text = localStorage.getItem('visual');
    circulatorio.options[circulatorio.selectedIndex].text = localStorage.getItem('circulatorio');
    tegumentar.options[tegumentar.selectedIndex].text = localStorage.getItem('tegumentar');
    esqueletoT.options[esqueletoT.selectedIndex].text = localStorage.getItem('esqueleto');
    mao.options[mao.selectedIndex].text = localStorage.getItem('mao');
    braco.options[braco.selectedIndex].text = localStorage.getItem('braços');
    pernas.options[pernas.selectedIndex].text = localStorage.getItem('pernasT');

    document.querySelector('#primaria').setAttribute('value', localStorage.getItem('prima'))
    document.querySelector('#secundaria').setAttribute ('value', localStorage.getItem('second'));
    document.querySelector('#mochila').innerHTML = localStorage.getItem('mochila');
    document.querySelector('#force').value = localStorage.getItem('str1');
    document.querySelector('#force-mod').value = localStorage.getItem('str2');
    document.querySelector('#agil').value = localStorage.getItem('agil1');
    document.querySelector('#agil-mod').value = localStorage.getItem('agil2');
    document.querySelector('#int').value = localStorage.getItem('int1');
    document.querySelector('#int-mod').value = localStorage.getItem('int2');
    document.querySelector('#tec-hab').value = localStorage.getItem('tH1');
    document.querySelector('#tec-hab-mod').value = localStorage.getItem('tH2');
    document.querySelector('#cool').value = localStorage.getItem('cool1');
    document.querySelector('#cool-mod').value = localStorage.getItem('cool2');
    document.querySelector('#hack1').value = localStorage.getItem('hack1');
    document.querySelector('#hack2').value = localStorage.getItem('hack2');
    document.querySelector('#hack3').value = localStorage.getItem('hack3');

    spanPlayer.innerHTML = playerName;
    spanAge.innerHTML = playerAge;
    spanFac.innerHTML = playerFac;

    cyberdeckdiv();
    calcRam();
}
