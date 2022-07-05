const hourHand =document.getElementById('hour');
const minutehand =document.getElementById('minutes');
const secondhand =document.getElementById('seconds');

function settime(){
    const currentDate=new Date();
    const secondRatio=currentDate.getSeconds() / 60;
    const minuteRatio=currentDate.getMinutes() / 60;
    const hourRatio=currentDate.getHours() / 12;
    wareegsamee(secondhand, secondRatio);
    wareegsamee(minutehand, minuteRatio);
    wareegsamee(hourHand, hourRatio);
}
function wareegsamee(elements,rotationRatio){
    elements.style.setProperty('--wareeg',rotationRatio * 360);
}
settime();
setInterval(settime,1000);
