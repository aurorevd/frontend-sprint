
const exercice1 =document.body.querySelector('#exercice1');
const exercice2 =document.body.querySelector('#exercice2');
const exercice3 =document.body.querySelector('#exercice3');
const exercice4 =document.body.querySelector('#exercice4');
const exercice5 =document.body.querySelector('#exercice5');
const dateAnchorage = new Date('October 26, 2022 00:00:00 GMT -08:00');
const dateReykjavik = new Date('October 26, 2022 8:00:00 GMT +00:00');
const dateSaintPetersburg = new Date('October 26, 2022 11:00:00 GMT +03:00');

exercice1.textContent=dateReykjavik;
exercice2.textContent=dateReykjavik;
exercice3.textContent=dateSaintPetersburg;


const myBirthday = new Date('1983-03-09'); 
const today = new Date ();

const countDays= () => {
 x= Math.floor((today.getTime() - myBirthday.getTime()) / (1000 * 60 * 60 * 24));
exercice4.textContent=x +" " + "days have passed since my birthday ;(";
};
countDays();


const findDate= (heure)=> {

let tomorrow=new Date (); 
const today = new Date ();

tomorrow.setTime(tomorrow.getTime() + heure * 3600 * 1000);

console.log(tomorrow.getHours()+":"+tomorrow.getMinutes()+" "+tomorrow.getDate()+"/"+(tomorrow.getMonth()+1)+"/"+tomorrow.getFullYear());
};


findDate(80000);








