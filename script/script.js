function calcStr() {
    var str = document.getElementById('force').value;
    var strMod = document.getElementById('force-mod').value;
    document.getElementById('force-total').value = Math.floor((parseInt(str) + parseInt(strMod)));
}



