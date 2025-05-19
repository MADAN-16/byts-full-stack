let count;
let c=0;
function start(){
    count=setInterval(()=>{
        document.getElementById('count').innerText=c++;
    },1000);
    
}

function stop(){
    clearInterval(count);
}

function reset(){
    document.getElementById('count').innerText=0;
    c=0;
}
