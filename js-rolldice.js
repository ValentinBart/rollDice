
//score cumulé des joueurs 
var scoreJ1 = 0; 
var scoreJ2 = 0;

//score en cours des joueurs
var tempJ1 = 0;
var tempJ2 = 0;

//Etat pour savoir si c'est le tour du joueur 1 ou 2
var etat = 1;



//fonction qui tire un nombre entre 1 et 6 au hasard et qui retour le résultat et l'image du dé
function roll(){
    


    var result = Math.floor(Math.random() * 6) + 1;
    let retour = document.getElementById('retour');
    retour.innerText = "résultat du dé " + result;
    
    animationDe(result);
    
    //Conditon qui stock le résultat en fonction du l'état de la partie
    if(etat == 1){
        let enCours = document.getElementById('enCoursJ1');
        if(result == 1){
            etat = 2;
            tempJ1 = 0;
            setTimeout(() => {enCours.innerText = 'En cours J1 ' + tempJ1;},3000);

        } else{
            tempJ1 = tempJ1 + result;
            
            setTimeout(() => {enCours.innerText = 'En cours J1 ' + tempJ1;},3000);
        }
    } else{
        let enCours = document.getElementById('enCoursJ2');
        if(result == 1){
            etat = 1;
            tempJ2 = 0;
            setTimeout(() => {enCours.innerText = 'En cours J2 ' + tempJ2;},3000);

        } else{
            tempJ2 = tempJ2 + result;
            
            setTimeout(() => {enCours.innerText = 'En cours J2 ' + tempJ2;},3000);
        }
    }




}

//fonction qui permet de créer les différentes face du dé en fonction du résultat.
function canvasDe(de){

    let canvasDe = document.getElementById('canvasDe');
    var ctx = canvasDe.getContext("2d");
    ctx.lineWidth="4";
    ctx.strokeStyle="#000000";
    ctx.rect(50,50,100,100);
    ctx.stroke();

    const radius = 6;

    ctx.clearRect(55,55,80,80);

    const haut = 75;
    const milieu = 100;
    const bas = 125;

    switch(de){
        case 1: 
        ctx.fillStyle ="#E90000";
        ctx.beginPath();
        ctx.arc(milieu,milieu,radius,2*Math.PI,false);
        ctx.fill();
        break;
        
        case 2:
        ctx.fillStyle ="#E90000";
        ctx.beginPath();
        ctx.arc(haut,haut,radius,2*Math.PI,false);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(bas,bas,radius,2*Math.PI,false);
        ctx.fill();
        break;

        case 3:
        ctx.fillStyle ="#E90000";
        ctx.beginPath();
        ctx.arc(milieu,milieu,radius,2*Math.PI,false);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(bas,bas,radius,2*Math.PI,false);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(haut,haut,radius,2*Math.PI,false);
        ctx.fill();
        break;

        case 4:
        ctx.fillStyle ="#E90000";
        ctx.beginPath();
        ctx.arc(bas,bas,radius,2*Math.PI,false);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(bas,haut,radius,2*Math.PI,false);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(haut,bas,radius,2*Math.PI,false);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(haut,haut,radius,2*Math.PI,false);
        ctx.fill();
        break;

        case 5:
        ctx.fillStyle ="#E90000";
        ctx.beginPath();
        ctx.arc(bas,bas,radius,2*Math.PI,false);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(bas,haut,radius,2*Math.PI,false);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(haut,bas,radius,2*Math.PI,false);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(haut,haut,radius,2*Math.PI,false);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(milieu,milieu,radius,2*Math.PI,false);
        ctx.fill();
        break;

        case 6:
        ctx.beginPath();
        ctx.arc(bas,bas,radius,2*Math.PI,false);
        ctx.fill();
        ctx.beginPath();     
        ctx.arc(bas,haut,radius,2*Math.PI,false);
        ctx.fill();
        ctx.beginPath();   
        ctx.arc(bas,milieu,radius,2*Math.PI,false);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(haut,milieu,radius,2*Math.PI,false);
        ctx.fill();
        ctx.beginPath();      
        ctx.arc(haut,bas,radius,2*Math.PI,false); 
        ctx.fill();
        ctx.beginPath();
        ctx.arc(haut,haut,radius,2*Math.PI,false);     
        ctx.fill();
        break;
        default:
        break;

    }


    
}

//Une fonction qui génère un canvas de dé aléatoire indépendament du résultat pour l'animation
function aleaDe(){
    
    var alea = Math.floor(Math.random() * 6) + 1;
    canvasDe(alea);
    
}


//Fonction pour animer le dé au moement du résultat
function animationDe(int){

    let start = Date.now(); // mémoriser l'heure de début

    let timer = setInterval(function() {
      // combien de temps s'est écoulé depuis le début ?
      let timePassed = Date.now() - start;
    
      if (timePassed >= 2000) {
        clearInterval(timer); // terminer l'animation après 2 secondes
        return;
      }
    
      // dessiner l'animation à l'instant timePassed
      aleaDe();
    
    }, 20);
   
   
    setTimeout(aleaDe,2200);
    setTimeout(aleaDe,2500);
    
    setTimeout(() => {canvasDe(int)},3000);
    
    
}