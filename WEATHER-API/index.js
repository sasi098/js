const weatherForm = document.getElementsByClassName("weatherForm");
const apikey = "dfaddc91c8c5ec08a34be06a2139a62f";
async function getweather() {
  event.preventDefault();
  const input = document.getElementById("cityinput").value;
  if (input) {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apikey}`
      );
      //   console.log(res);
      if (!res.ok) {
        console.log(`once check ${input} is correct`);
        errormsg("error in name correction");
        throw new Error("error in fething data");
      } else {
        const data = await res.json();
        console.log(data);
        displaydata(data);
      }
    } catch (error) {
      console.log("error in fetching data");
      errormsg("error in fetching data");
    }
  } else {
    errormsg("enter the city name");
    console.log("error in input");
  }
}

function displaydata(data) {
  const {
    name: city,
    main: { temp, humidity },
    weather: [{ description, id }],
  } = data;

  document.getElementById("cityDisplay").textContent = city;
  document.getElementById("tempDisplay").textContent = `${(
    (temp - 273.15) * (9 / 5) +
    32
  ).toFixed(1)}c`;
  document.getElementById("humidityDisplay").textContent = humidity;
  document.getElementById("descDisplay").textContent = description;
  //id for weather emoji
}
function errormsg(message) {
  const error = document.getElementById("errorDisplay");
  error.textContent = message;
}
