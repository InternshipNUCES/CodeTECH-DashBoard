function timer(){
    
    const date = new Date();
    let hr = date.getHours();
    let meriden = hr > 12 ? "PM":"AM";
    hr = hr % 12 || 12;
    hr = hr.toString().padStart(2,0);
    const min = date.getMinutes().toString().padStart(2,0);
    const sec = date.getSeconds().toString().padStart(2,0);
    
    const realtime = `${hr}:${min}:${sec} ${meriden}`;
    document.getElementById('clock').textContent = realtime;
    

}
const al = document.getElementById('al');
const element1 = document.getElementById('element1');

function Master(){
    
    element1.classList.add('container');
   
}

al.onclick = function(){
    window.alert("You are already on Home Page");
}

timer();
setInterval(timer,1000);