
let day= document.querySelector(".day")
let hour =document.querySelector(".hour")
let minute =document.querySelector(".minute")
let second =document.querySelector(".second")

function timeJs(){
    let date= new Date()
    
    // Get local hour
    let bdhour= date.getHours();
    let ampm = bdhour >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    bdhour = bdhour % 12 || 12;


    day.innerHTML=date.getDate().toString().padStart(2,"0")
    hour.innerHTML=bdhour.toString().padStart(2,"0")+ "  " + ampm
    minute.innerHTML=date.getMinutes().toString().padStart(2,"0")
    second.innerHTML=date.getSeconds().toString().padStart(2,"0")
}


setInterval(()=>{
    timeJs()
}, 1000)