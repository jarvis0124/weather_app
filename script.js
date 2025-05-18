const body = document.querySelector('body');
const inputLocation =  document.getElementById("location");
const enter =  document.getElementById("enter");
const geoLocation =  document.getElementById("geoLocation");
const left = document.getElementById("left");
const right = document.getElementById("right");
 
// adding previous location to local storage
function previousEntries(){
    enter.addEventListener('click', ()=>{
     //   console.log(inputLocation.value)
        const city =  inputLocation.value.trim();

        console.log(city);
        if(city == "" || typeof(city) != 'string') return;

        checkCity(city);
        //async fn to get data
        getUsingCity(String(city));

        inputLocation.value = "";
        
    })

    function checkCity(city){

    // Load existing cities from localStorage or initialize empty array
    let cities = JSON.parse(localStorage.getItem("citiesArr")) || [];
    if(!cities.includes(city)){
        cities.push(city)
        localStorage.setItem("citiesArr",JSON.stringify(cities))
    }

    }

}
previousEntries();

//showing previous cities list on city input
function updateCities(){
    const allcities = JSON.parse(localStorage.getItem("citiesArr"))
  //  console.log(allcities);

        const previous = document.createElement("div");
        previous.id ="previous";

    inputLocation.addEventListener('click', ()=>{
        allcities.forEach(element => {
            const p = document.createElement('p');
            p.textContent = element;
            previous.appendChild(p);
            p.addEventListener('click',()=>{
                inputLocation.value = element;
            })

        });

        left.insertBefore(previous, enter);
    })

    enter.addEventListener('click',()=>{
        left.removeChild(previous)
    })

}
updateCities();


//getting current location.
//passing getLocation function to addEaddEventListener as callBack fn
geoLocation.addEventListener('click', getLocation)

function getLocation(){
    if(!navigator.geolocation){
        alert("Unable to fetch location enter manually")
    }

    //getting location
    navigator.geolocation.getCurrentPosition(currentPosition);

     function currentPosition(position){
        console.log(position)
      //  console.log(position);
    const latitude= `latitude :- ${position.coords.latitude}`;
    const longitude = `longitude :- ${position.coords.longitude}`;
   console.log(latitude, longitude);
    getUsinglocation(latitude, longitude)
 }
}


async function getUsingCity(city){
    const key = "84597c0435d949feb85130704251805";
    try{
       const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=7&aqi=yes&alerts=no`);
       if(response.ok == false){
        throw new Error(`HTTP error! status: ${response.status}`)
       }
       const data = await response.json();
       console.log(data)
       createCard(data);
       weatherData = data;
       return data;
    }catch(error){
        console.log(error);
    }
}


async function getUsinglocation(latit, longi){
    let latitude= latit;
    let longitude = longi;

    const key = "84597c0435d949feb85130704251805";
    try{
       const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${latitude,longitude}&days=7&aqi=yes&alerts=no`);
       if(response.ok == false){
        throw new Error(`HTTP error! status: ${response.status}`)
       }
       const data = await response.json();
       console.log(data)
       //passing to create card.
       createCard(data);
       weatherData = data;
       return data;
    }catch(error){
        console.log(error);
    }
}



function card_0(weatherData){
const weather_0 = weatherData.forecast.forecastday[0];
const location = weatherData.location;
console.log(weatherData.forecast.forecastday[0]);
    const date_0 = document.getElementById('date_0');
    const srise_0 = document.getElementById('srise_0');
    const sset_0 = document.getElementById('sset_0');
    const humid_0= document.getElementById('humid_0');
    const temp_0 = document.getElementById('temp_0');
    const uv_0 = document.getElementById('uv_0');
    const location_0 = document.getElementById("location_0");
    //adding data to card
    date_0.textContent =  weather_0.date;
    srise_0.textContent = weather_0.astro.sunrise;
    sset_0.textContent = weather_0.astro.sunset;
    humid_0.textContent = weather_0.day.avghumidity;
    temp_0.textContent = weather_0.day.avgtemp_c;
    uv_0.textContent = weather_0.day.uv;
    location_0.textContent =`CITY: -${location.name}  State:- ${location.region} Country :-${location.country}`
   
}

function card1(weatherData){
const weather_1 = weatherData.forecast.forecastday[1];

const date_1 = document.getElementById('date_1');
const temp_1 = document.getElementById('temp_1');
const humid_1= document.getElementById('humid_1');
const uv_1 = document.getElementById('uv_1');


date_1.textContent =  weather_1.date;
 temp_1.textContent = weather_1.day.avgtemp_c;
 humid_1.textContent = weather_1.day.avghumidity;
 uv_1.textContent = weather_1.day.uv;
}

function card2(weatherData){
const weather_2 = weatherData.forecast.forecastday[2];

const date_2 = document.getElementById('date_2');
const temp_2 = document.getElementById('temp_2');
const humid_2= document.getElementById('humid_2');
const uv_2 = document.getElementById('uv_2');


date_2.textContent =  weather_2.date;
 temp_2.textContent = weather_2.day.avgtemp_c;
 humid_2.textContent = weather_2.day.avghumidity;
 uv_2.textContent = weather_2.day.uv;
}
function card3(weatherData){
const weather_3 = weatherData.forecast.forecastday[3];

const date_3 = document.getElementById('date_3');
const temp_3 = document.getElementById('temp_3');
const humid_3= document.getElementById('humid_3');
const uv_3 = document.getElementById('uv_3');


date_3.textContent =  weather_3.date;
 temp_3.textContent = weather_3.day.avgtemp_c;
 humid_3.textContent = weather_3.day.avghumidity;
 uv_3.textContent = weather_3.day.uv;
}

function card4(weatherData){
const weather_4 = weatherData.forecast.forecastday[4];

const date_4 = document.getElementById('date_4');
const temp_4 = document.getElementById('temp_4');
const humid_4= document.getElementById('humid_4');
const uv_4 = document.getElementById('uv_4');


date_4.textContent =  weather_4.date;
 temp_4.textContent = weather_4.day.avgtemp_c;
 humid_4.textContent = weather_4.day.avghumidity;
 uv_4.textContent = weather_4.day.uv;
}
function card5(weatherData){
const weather_5 = weatherData.forecast.forecastday[5];

const date_5 = document.getElementById('date_5');
const temp_5 = document.getElementById('temp_5');
const humid_5= document.getElementById('humid_5');
const uv_5 = document.getElementById('uv_5');


date_5.textContent =  weather_5.date;
 temp_5.textContent = weather_5.day.avgtemp_c;
 humid_5.textContent = weather_5.day.avghumidity;
 uv_5.textContent = weather_5.day.uv;
}
function card6(weatherData){
const weather_6 = weatherData.forecast.forecastday[6];

const date_6 = document.getElementById('date_6');
const temp_6 = document.getElementById('temp_6');
const humid_6= document.getElementById('humid_6');
const uv_6 = document.getElementById('uv_6');


date_6.textContent =  weather_6.date;
 temp_6.textContent = weather_6.day.avgtemp_c;
 humid_6.textContent = weather_6.day.avghumidity;
 uv_6.textContent = weather_6.day.uv;
}


//passing object to each card;
function createCard(data){
console.log(data)
card_0(data)
card1(data);
card2(data);
card4(data);
card5(data);
card6(data)
}
