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

    ctx.clearRect(55,55,80,80);

    const haut = 75;
    const milieu = 100;
    const bas = 125;

    switch(result){
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