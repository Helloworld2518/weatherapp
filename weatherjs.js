const apiKey = "9d8b70192758bfbfa61e5a1b16c935b6"; // add your api key
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

// fetch data from the API
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  document.querySelector(".weather").style.display = "flex";

  // display data
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  // change weather icon
  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "clouds.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "mist.png";
  } else if (data.weather[0].main == "Snow") {
    weatherIcon.src = "snow.png";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

function tanggal() {
  var bulanlist = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  var hari = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
  var h = new Date();
  var date = h.getDate();
  var day = h.getDay();
  if (day == 0) {
    day = day + 6;
  } else {
    day = day - 1;
  }
  var bulan = h.getMonth();
  var bln = bulanlist[bulan];
  var jam = h.getHours();
  var kosong = " ";
  var fixed_date =
    hari[day] + "," + kosong + date + kosong + bln + kosong + h.getFullYear();
  var fxd = document.getElementById("tanggal");
  var fxt = document.getElementById("jam");
  fxd.innerHTML = fixed_date;
  fxt.innerHTML = jam + "." + h.getMinutes() + "." + h.getSeconds();
}
tanggal();
