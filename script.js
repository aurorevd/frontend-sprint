
const txt = 'prout';
const speed = 1000;

const exercice1 = document.getElementById('exercice1');

const typeWriter =() => {
  var i = 0;
  exercice1.textContent = "";

  let interval = setInterval(function(){
    exercice1.textContent += txt[i];
    i++;

    if (i === txt.length) {
      clearInterval(interval);
    }
  }, speed);
};

typeWriter();

//Write a function that displays every second that has passed on the page since it was opened. 
//The display should be refreshed every second. 
//If 60 seconds are elapsed, write "a minute has passed", then "2 minutes have passed" (for 120 seconds and more), etc.

const _initTime = Date.now();

const ElapsedTime = () => {
  return Number(Math.floor((Date.now() - _initTime) / 1000)).toFixed(2) ;
};

const exercice2 = document.getElementById('exercice2');

const getElapsedTime =() => {
  exercice2.textContent = "";

  let u = setInterval(function(){
    exercice2.textContent = ElapsedTime();
    if (ElapsedTime() >= 60.00) {
      clearInterval(u);
      exercice2.textContent= "a minute has passed";}
  }, 1000);

  let v= setInterval(function()
    { if (ElapsedTime()>=120.00)
      {exercice2.textContent= ElapsedTime()/60 +" " + "minutes have passed";}
    }, 60000);
};

getElapsedTime();






