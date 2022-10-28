
const day=document.getElementById('day');
const number=document.getElementById('number');
const month=document.getElementById('month');
const year=document.getElementById('year');
const hour=document.getElementById('hour');
const minute=document.getElementById('minute');
const sec=document.getElementById('sec');
const right=document.getElementById('right');

const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];




let timeClick = true;
const changeformat = (e) => {
  console.log("click")
timeClick=!timeClick};


const time=()=>{
let today=new Date();
minute.textContent=":"+today.getMinutes()+ ":";
if(timeClick){
hour.textContent=today.getHours();
console.log("12")  
}
else{
hour.textContent=new Date().getHours('en-US', {hours12:false});
console.log("24")  
}
sec.textContent=today.getSeconds();
year.textContent=today.getFullYear();
month.textContent=months[today.getMonth()];
number.textContent=today.getDate();

day.textContent=days[today.getDay()];
};

time();
setInterval(time, 1000);
  
hour.addEventListener("click", changeformat);





