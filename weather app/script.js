

const input=document.querySelector(".search");
const button=document.querySelector("button");
const main=document.querySelector("#main");

const Weather =() => {

let apiKey = "3473f8d955aa202dfd26ba1e7a12d5d3";


button.addEventListener("click", () =>{
  const WeatherCity=document.createElement("div");
const h2=document.createElement("h2");
WeatherCity.appendChild(h2);
WeatherCity.classList="WeatherCity"; 
const flex1=document.createElement("div");
flex1.classList="flex1";

main.appendChild(flex1);
flex1.appendChild(WeatherCity);

const fetchWeather = (city)  => 
  fetch("https://api.openweathermap.org/data/2.5/forecast?q="+ city +"&units=metric&appid="+apiKey);


 let inCity = input.value;

    fetchWeather(inCity)
    .then((response) => response.json())
    .then((json) => {
    for(let i=0; i<json.list.length; i++){
  

  const flex2=document.createElement("div");
  flex2.classList="flex2";
  const h3=document.createElement("h3");
  h3.classList="h3";
  const temp=document.createElement("div");
  temp.classList="temp";
  const icon=document.createElement("img");
  icon.classList="icon";
  const description=document.createElement("div");
  description.classList="description";
  flex1.appendChild(flex2);
  flex2.prepend(h3,temp, icon, description);
    
  let date= new Date(json.list[i].dt_txt);
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  h3.innerHTML=days[date.getDay()]+" "+date.getHours()+":00";
  h2.innerText = json.city.name;
  temp.innerText=Math.ceil( json.list[i].main.temp) +"°C";
  icon.src= "http://openweathermap.org/img/wn/"+json.list[i].weather[0].icon+"@2x.png";
  description.innerText=json.list[i].weather[0].description;
    }
});  

let city = input.value;
  fetch("https://api.unsplash.com/search/photos?&client_id=UsaS3TSu6U08ltFSHoZbnKIJJwWUXYPYCzfA8ABxOTQ&query="+city )
    .then((response) => response.json())
    .then((json) => {
      x=json.results[1].urls.regular;
      console.log(x);
     WeatherCity.style.backgroundImage ='url("'+x+'")';
    });  
});

};


Weather();








