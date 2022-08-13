
//fonction qui tire un nombre entre 1 et 6 au hasard et qui retour le résultat et l'image du dé
function roll(){
    
    

    var result = Math.floor(Math.random() * 6) + 1;
    let retour = document.getElementById('retour');
    retour.innerText = "résultat du dé " + result;
    
    animationDe(result);
        
    

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

function aleaDe(){
    
    var alea = Math.floor(Math.random() * 6) + 1;
    canvasDe(alea);
    
}



function animationDe(int){
   
    setTimeout(aleaDe,1);
    setTimeout(aleaDe,20);
    setTimeout(aleaDe,30);
    setTimeout(aleaDe,40);
    setTimeout(aleaDe,50);
    setTimeout(aleaDe,60);
    setTimeout(aleaDe,70);
    setTimeout(aleaDe,80);
    setTimeout(aleaDe,100);
    setTimeout(aleaDe,150);
    setTimeout(aleaDe,250);
    setTimeout(aleaDe,350);
    setTimeout(aleaDe,450);
    setTimeout(aleaDe,600);
    setTimeout(aleaDe,800);
    setTimeout(aleaDe,1000);
    setTimeout(aleaDe,1200);

    
    setTimeout(() => {canvasDe(int)},2500);
    
    
}