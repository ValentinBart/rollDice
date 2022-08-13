function roll(){
    var result = Math.floor(Math.random() * 6) + 1;
    let retour = document.getElementById('retour');
    retour.innerHTML = "résultat du dé " + result;

}