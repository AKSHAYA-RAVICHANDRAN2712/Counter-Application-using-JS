
let count=0;
let interval=null;
function incrementcounter(){
    count++;
    document.getElementById("counter").textContent=count
}
function startcounter(){
    if(!interval){
        interval=setInterval(incrementcounter,100)
    }
}
function stopcounter(){
    clearInterval(interval)
    interval=null
}
function resetcounter(){
    stopcounter();
    count=0;
    document.getElementById("counter").textContent=count;
}