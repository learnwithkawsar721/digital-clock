const myClock = document.getElementById('myClock');
function time(){
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session ='AM';
    if(h>=12){
        h = h-12;
        session= 'PM';
    }
    if(h===0){
        h=12;
    }
    h = (h<10)? '0' + h : h;
    m = (m<10)? '0' + m : m;
    s = (s<10)? '0' + s : s;
    myClock.innerHTML=`${h}:${m}:${s} ${session}`;
    // console.log(h,m,s,session);
}
setInterval(time,1000);
// time();