
const display=document.querySelector("#display");
const input=document.querySelector("input");
const button=document.querySelector("button");
const select=document.querySelector("select");
const options=document.querySelectorAll("option");

const MedianAge =()=>{
const fetchName = (name, options)  => fetch('https://api.agify.io/?name=' + name + "&country_id=" + options);
fetchName(input.value, select.value )
.then(response => response.json())
.then(json => {
  
  const newDiv=document.createElement("div");
  const display=document.querySelector("#display");
  display.appendChild(newDiv);
  newDiv.textContent=json.age +"  " + input.value + "  "+ json.count+" "+select.value;
  let data =window.localStorage.setItem(input.value, json.age+ "  "+ json.count+" "+select.value);
 data=[];
console.log(data);
})
.catch(error => {
  console.log('There was an error!', error);
})
}

button.addEventListener("click", MedianAge);


