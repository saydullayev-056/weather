const API_KEY = "03e9ddd42bcb79e5049f3619d74b0583";

const button = document.querySelector("#button");
const getInputValue = document.querySelector("#city");
const details = document.querySelector(".cards")

const getData = async (getInputValue)=>{
  
  const userRequest = new Request(`https://api.openweathermap.org/data/2.5/forecast?q=${getInputValue}` + "&appid=" + "&apikey=" + API_KEY,);
  const response = await fetch(userRequest)  
  const data = await response.json()
  
   return data
}

const updateUI = (weather)=>{
  
  console.log(weather)
  
details.innerHTML = `
<div class="result">
<h2 class="text res-text">${weather.city.name}</h2>
<img class="img-icon" src=" https://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@4x.png">

<p class="temperature"></p>

<p class="names-weth plot_line"></p>
<h3 class="names-weth">Temperature:${Math.round(weather.list[0].main.temp)}°</h3>
<p class="humidity">${weather.list[0].dt_txt}</p>
<div class="humidity1">
<h3>Humidity:</h3>
<p>${weather.list[0].main.humidity}%</p>
</div></div>




<div class="result">
<h2 class="text res-text">${weather.city.name}</h2>
<img class="img-icon" src=" https://openweathermap.org/img/wn/${weather.list[1].weather[0].icon}@4x.png">

<p class="temperature"></p>

<p class="names-weth plot_line"></p>
<h3 class="names-weth">Temperature:${Math.round(weather.list[1].main.temp)}°</h3>
<p class="humidity">${weather.list[1].dt_txt}</p>
<div class="humidity1">
<h3>Humidity:</h3>
<p>${weather.list[1].main.humidity}%</p>
</div></div>


<div class="result">
<h2 class="text res-text">${weather.city.name}</h2>
<img class="img-icon" src=" https://openweathermap.org/img/wn/${weather.list[2].weather[0].icon}@4x.png">

<p class="temperature"></p>

<p class="names-weth plot_line"></p>
<h3 class="names-weth">Temperature:${Math.round(weather.list[2].main.temp)}°</h3>
<p class="humidity">${weather.list[2].dt_txt}</p>
<div class="humidity1">
<h3>Humidity:</h3>
<p>${weather.list[2].main.humidity}%</p>
</div></div>



<div class="result">
<h2 class="text res-text">${weather.city.name}</h2>
<img class="img-icon" src=" https://openweathermap.org/img/wn/${weather.list[3].weather[0].icon}@4x.png">

<p class="temperature"></p>

<p class="names-weth plot_line"></p>
<h3 class="names-weth">Temperature:${Math.round(weather.list[3].main.temp)}°</h3>
<p class="humidity">${weather.list[3].dt_txt}</p>
<div class="humidity1">
<h3>Humidity:</h3>
<p>${weather.list[3].main.humidity}%</p>
</div></div>


<div class="result">
<h2 class="text res-text">${weather.city.name}</h2>
<img class="img-icon" src=" https://openweathermap.org/img/wn/${weather.list[4].weather[0].icon}@4x.png">

<p class="temperature"></p>

<p class="names-weth plot_line"></p>
<h3 class="names-weth">Temperature:${Math.round(weather.list[4].main.temp)}°</h3>
<p class="humidity">${weather.list[4].dt_txt}</p>
<div class="humidity1">
<h3>Humidity:</h3>
<p>${weather.list[4].main.humidity}%</p>
</div></div>
</div>
`

}
const getWeather = async (getInputValue)=>{
  const data = await getData(getInputValue)
 
  return data

} 

const searchHandler = (e) => {
  e.preventDefault()

const cityName = getInputValue.value.trim()
getWeather(cityName).then((data)=>updateUI(data))
const det = document.querySelector(".cards")
det.classList.add("visible")
}
button.addEventListener("click", searchHandler);



