function roll(){
    var result = Math.floor(Math.random() * 6) + 1;
    let retour = document.getElementById('retour');
    retour.innerText = "résultat du dé " + result;
    
    let canvasDe = document.getElementById('canvasDe');
    var ctx = canvasDe.getContext("2d");
    ctx.lineWidth="4";
    ctx.strokeStyle="#000000";
    ctx.rect(50,50,100,100);
    ctx.stroke();

    const radius = 6;


    switch(result){
        case 1: 
        ctx.fillStyle ="#E90000";
        ctx.beginPath();
        ctx.arc(97,97,radius,2*Math.PI,false);
        ctx.fill();
        break;
        
    }


}