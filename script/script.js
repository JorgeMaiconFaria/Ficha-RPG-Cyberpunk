/*---ATTRIBUTES TABLE'S SUM SCRIPT*/
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
    var tH = document.getElementById('tec.hab').value;
    var tHMod = document.getElementById('tec.hab-mod').value;
    document.getElementById('tec-hab-total').innerHTML = Math.floor((parseInt(tH) + parseInt(tHMod)));
    return Math.floor((parseInt(tH) + parseInt(tHMod)));};

function calcCool() {
    var cool = document.getElementById('cool').value;
    var coolMod = document.getElementById('cool-mod').value;
    document.getElementById('cool-total').innerHTML = Math.floor((parseInt(cool) + parseInt(coolMod)));
    return Math.floor((parseInt(cool) + parseInt(coolMod)));};

const spanPlayer = document.getElementById('spanPlayer');
const spanAge = document.getElementById('spanAge');
const spanFac = document.getElementById('spanFac');
const form = document.getElementById('form-status');

const cortex = document.getElementById('cortex');
const sisVisual = document.getElementById('sistema-visual');
const circulatorio = document.getElementById('sistema-circulatorio');
const tegumentar = document.getElementById('sistema-tegumentar');
const esqueletoT = document.getElementById('esqueleto');
const mao = document.getElementById('mao');
const braco = document.getElementById('braços');
const pernas = document.getElementById('pernas');


const imputPrimaria = document.querySelector('#primaria');
const imputSecundaria = document.querySelector('#secundaria');
const imputmochila = document.getElementsByTagName('textarea').innerText;



/*---LOCAL STORAGE SCRIPTS */

const resetar = function() {
    localStorage.clear();
    window.location = 'index.html'
};

const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem('prima', imputPrimaria.value);
   // document.querySelector('#primaria').innerText = localStorage.getItem('prima');

    localStorage.setItem('second', imputSecundaria.value);
    //document.querySelector('#secundaria').innerText = localStorage.getItem('second');

    localStorage.setItem('strTotal', calcStr());
    //document.getElementById('force-total').innerHTML = localStorage.getItem('strTotal');

    localStorage.setItem('agilTotal', calcAgil());
    //document.getElementById('agil-total').innerHTML = localStorage.getItem('agilTotal');

    localStorage.setItem('intTotal', calcInt());
  //  document.getElementById('int-total').innerHTML = localStorage.getItem('intTotal');

    localStorage.setItem('tecHabTotal', calcTH());
   // document.getElementById('tec-hab-total').innerHTML = localStorage.getItem('tecHabTotal');

    localStorage.setItem('coolTotal', calcCool());
   // document.getElementById('cool-total').innerHTML = localStorage.getItem('coolTotal');

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


    //---INVENTORY---//

};
    
   
form.addEventListener('reset', resetar);

form.addEventListener('submit', handleSubmit);

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

    spanPlayer.innerHTML = playerName;
    spanAge.innerHTML = playerAge;
    spanFac.innerHTML = playerFac;

};

