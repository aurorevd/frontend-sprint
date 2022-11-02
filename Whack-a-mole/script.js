
function randomCircle() {
    return( Math.ceil(Math.random() * 11));}


const circles=document.querySelectorAll(".circle");


let times = 0;

function moles() {
  i=randomCircle();
  console.log(circles[i]);
  circles[i].style.backgroundColor = 'yellow';
  circles[i].style.boxShadow = 'none';

  function byemoles() {
  circles[i].style.backgroundColor = 'white';
  circles[i].style.boxShadow = 'inset 30px 20px black';
  }
  setTimeout(byemoles, 2000);
}

setInterval(moles, 3000);

score=document.querySelector(".score");
let hit = 0;

const hammer= (e) => {
if (e.target.style.backgroundColor==='yellow')
{hit++;
score.textContent=hit;
e.target.style.backgroundColor='white';
}
else{
 
  if (hit===0)
    {score.textContent=0;}
  else{ hit--;
  score.textContent=hit;
}
  
}
};


circles.forEach((circle)=> {
 circle.addEventListener ("click", hammer );
});
