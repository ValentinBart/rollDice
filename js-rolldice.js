
//score cumulé des joueurs 
var scoreJ1 = 0; 
var scoreJ2 = 0;
let cumulJ1 = document.getElementById('cumulJ1');
let cumulJ2 = document.getElementById('cumulJ2');
let enCoursJ1 = document.getElementById('enCoursJ1');
let enCoursJ2 = document.getElementById('enCoursJ2');

//score en cours des joueurs
var tempJ1 = 0;
var tempJ2 = 0;

//Etat pour savoir si c'est le tour du joueur 1 ou 2
var etat = 1;

let retour = document.getElementById('retour');


//fonction qui tire un nombre entre 1 et 6 au hasard et qui retour le résultat et l'image du dé
function roll(){
    


    var result = Math.floor(Math.random() * 6) + 1;
    retour.innerText = "résultat du dé " + result;// a supprimer par la suite une fois les test faits
    
    animationDe(result);
    
    //Conditon qui stock le résultat en fonction du l'état de la partie
    if(etat == 1){
        
        if(result == 1){
            etat = 2;
            tempJ1 = 0;
        } else{
            tempJ1 = tempJ1 + result;
        }
        setTimeout(() => {enCoursJ1.innerText = 'En cours J1 ' + tempJ1;},3000);
    } else{
        
        if(result == 1){
            etat = 1;
            tempJ2 = 0; 
        } else{
            tempJ2 = tempJ2 + result;       
        }
        setTimeout(() => {enCoursJ2.innerText = 'En cours J2 ' + tempJ2;},3000);
    }




}

//fonction pour stocker le score et changer de joueur  
function hold(){
    if(etat == 1){
        etat = 2;
        scoreJ1 = scoreJ1 + tempJ1;
        tempJ1 = 0;
        cumulJ1.innerText ='Score J1: '+scoreJ1;
        enCoursJ1.innerText = 'En cours J1 ' + tempJ1;
    }else{
        etat = 1;
        scoreJ2 = scoreJ2 + tempJ2;
        tempJ2 = 0;
        cumulJ2.innerText ='Score J2: '+scoreJ2;
        enCoursJ2.innerText = 'En cours J2 ' + tempJ2;

    }

}
//fonction nouvelle partie qui remet les score à 0 et supprime les canvas
function newGame(){
    scoreJ1 = 0; 
    scoreJ2 = 0;
    tempJ1 = 0;
    tempJ2 = 0;
    etat = 1;

    let canvasDe = document.getElementById('canvasDe');
    var ctx = canvasDe.getContext("2d");
    ctx.clearRect(0,00,200,200);

    cumulJ1.innerText ='Score J1: '+scoreJ1;
    enCoursJ1.innerText = 'En cours J1 ' + tempJ1;
    cumulJ2.innerText ='Score J2: '+scoreJ2;
    enCoursJ2.innerText = 'En cours J2 ' + tempJ2;

    
}

//fonction qui permet de créer les différentes face du dé en fonction du résultat.
function canvasDe(de){

    let canvasDe = document.getElementById('canvasDe');
    var ctx = canvasDe.getContext("2d");
    ctx.lineWidth="4";
    ctx.strokeStyle="#000000";
    ctx.rect(40,40,120,120);
    ctx.stroke();

    const radius = 6;

    ctx.clearRect(45,45,100,100);

    const haut = 70;
    const milieu = 100;
    const bas = 130;

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