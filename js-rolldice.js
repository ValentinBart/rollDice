pointG();
//score cumulé des joueurs 
var scoreJ1 = 0; 
var scoreJ2 = 0;

//score en cours des joueurs
var tempJ1 = 0;
var tempJ2 = 0;

//Etat pour savoir si c'est le tour du joueur 1 ou 2
var etat = 1;

//récupération des différents éléments à modifier
let cumulJ1 = document.getElementById('cumulJ1');
let cumulJ2 = document.getElementById('cumulJ2');
let enCoursJ1 = document.getElementById('enCoursJ1');
let enCoursJ2 = document.getElementById('enCoursJ2');
let retour = document.getElementById('retour');
let j1 = document.getElementById('j1');
let j2 = document.getElementById('j2');
let buttonRoll = document.getElementById('buttonRoll');
let buttonHold = document.getElementById('buttonHold');
let buttonNew = document.getElementById('buttonNew');


//fonction qui tire un nombre entre 1 et 6 au hasard et qui retour le résultat et l'image du dé
function roll(){
    
    //désactivation des boutons le temps du lancé de dé
    buttonRoll.disabled = true;
    buttonHold.disabled = true;
    buttonNew.disabled = true;
    setTimeout(() => {    
        buttonRoll.disabled = false;
        buttonHold.disabled = false;
        buttonNew.disabled = false;
    },3000);

    //random du dé + animation
    var result = Math.floor(Math.random() * 6) + 1;
    
    animationDe(result);
    
    //Conditon qui stock le résultat en fonction du l'état de la partie et fait les modifications
    if(etat == 1){
        
        if(result == 1){
            etat = 2;
            tempJ1 = 0;

            setTimeout(() => {

                pointD();

                },3000)

        } else{
            tempJ1 = tempJ1 + result;
        }
        setTimeout(() => {enCoursJ1.innerText =tempJ1;},3000);
    } else{
        
        if(result == 1){
            etat = 1;
            tempJ2 = 0; 
            setTimeout(() => {

                pointG();

            },3000)

        } else{
            tempJ2 = tempJ2 + result;       
        }
        setTimeout(() => {enCoursJ2.innerText =tempJ2;},3000);

    }





}

//fonction pour stocker le score et changer de joueur  
function hold(){
    if(etat == 1){
        etat = 2;
        scoreJ1 = scoreJ1 + tempJ1;
        tempJ1 = 0;
        cumulJ1.innerText = scoreJ1;
        enCoursJ1.innerText = tempJ1;
        
        pointD();
        
    }else{
        etat = 1;
        scoreJ2 = scoreJ2 + tempJ2;
        tempJ2 = 0;
        cumulJ2.innerText = scoreJ2;
        enCoursJ2.innerText = tempJ2;
       
        pointG();
       

    }

    if(scoreJ1 >= 100){

        cumulJ1.innerText = 'Victoire';
        cumulJ1.style.color ='Green';
        cumulJ2.innerText = 'Défaite';
        cumulJ2.style.color ='red';
        j2.style.border ='1rem solid red';
        j1.style.border ='1rem solid green';
        buttonRoll.disabled = true;
        buttonHold.disabled = true;

    }if(scoreJ2 >= 100){
        cumulJ2.innerText = 'Victoire';
        cumulJ2.style.color ='Green'
        cumulJ1.innerText = 'Défaite';
        cumulJ1.style.color ='red';
        j1.style.border ='1rem solid red';
        j2.style.border ='1rem solid green';
        buttonRoll.disabled = true;
        buttonHold.disabled = true;
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

    cumulJ1.innerText = scoreJ1;
    enCoursJ1.innerText = tempJ1;
    cumulJ2.innerText = scoreJ2;
    enCoursJ2.innerText = tempJ2;
    buttonRoll.disabled = false;
    buttonHold.disabled = false;

    
}

//fonction qui permet de créer les différentes face du dé en fonction du résultat.
function canvasDe(de){

    let canvasDe = document.getElementById('canvasDe');
    var ctx = canvasDe.getContext("2d");
    ctx.lineWidth="4";
    ctx.strokeStyle="black";
    ctx.fillStyle="white";
    ctx.rect(40,40,120,120);
    ctx.stroke();

    const radius = 6;

    ctx.clearRect(40,40,120,120);
    ctx.fillRect(40,40,120,120);

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
        ctx.fillStyle ="#E90000";
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

function pointG(){

    let canvasG = document.getElementById('canvasG');
    var ctx = canvasG.getContext("2d");
    ctx.fillStyle ="#E90000";
    ctx.beginPath();
    ctx.arc(10,10,10,2*Math.PI,false);
    ctx.fill();

    let canvasD = document.getElementById('canvasD');
    var ctx2 = canvasD.getContext("2d");
    ctx2.clearRect(0,0,50,50);

}

function pointD(){

    let canvasD = document.getElementById('canvasD');
    var ctx = canvasD.getContext("2d");
    ctx.fillStyle ="#E90000";
    ctx.beginPath();
    ctx.arc(10,10,10,2*Math.PI,false);
    ctx.fill();

    let canvasG = document.getElementById('canvasG');
    var ctx2 = canvasG.getContext("2d");
    ctx2.clearRect(0,0,50,50);

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