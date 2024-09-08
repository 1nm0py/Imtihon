import { Col } from 'react-bootstrap';

// let api = {
//   key: "84a3781201a7f9a9bda21e4f05b6c2f0",
//   baseUrl: "https://api.openweathermap.org/data/2.5/"
// }

// let BTNBox = document.querySelector('.Enter');
// let NickBox = document.querySelector('.Nick_name');
// BTNBox.addEventListener("keypress", setQuery)
// function setQuery(e) {
//   if (e.keyCode == 13) {
//     getResult(NickBox.value)
//     NickBox.value = ""
//   }
// }
// function getResult(query) {
//   fetch(`${api.baseUrl}weather?q=${query}&units=metric&APPID=${api.key}`)
//     .then((weather) => {
//       return weather.json()
//     }).then((res) => displayResult(res))
// }
// function displayResult(weather) {
//   let city = document.querySelector('.location .city');
//   let mainTemp = document.querySelector('.main-temp .temp');
//   let wetherel = document.querySelector('.weather');
//   let hilow = document.querySelector('.hi-low');
//   city.innerHTML = `${weather.name}, ${weather.sys.country}`
//   mainTemp.innerHTML = `${Math.floor(weather.main.temp)} <span> °C </span>`;
//   wetherel.innerHTML = weather.weather[0].main
//   hilow.innerHTML = `${weather.main.temp_min} °C / ${weather.main.temp_max} °C`
//   document.body.style.backgroundImage = "url(https://source.unsplash.com/1600x900/?" + weather.name + ")"
// }

import './input.css'
export default function input() {
  // let api = {
  //   key: "84a3781201a7f9a9bda21e4f05b6c2f0",
  //   baseUrl: "https://api.openweathermap.org/data/2.5/"
  // }

  // let BTNBox = document.querySelector('.Enter');
  // let NickBox = document.querySelector('.Nick_name');
  // BTNBox.addEventListener("keypress", setQuery)
  // function setQuery(e) {
  //   if (e.keyCode == 13) {
  //     getResult(NickBox.value)
  //     NickBox.value = ""
  //   }
  // }
  // function getResult(query) {
  //   fetch(`${api.baseUrl}weather?q=${query}&units=metric&APPID=${api.key}`)
  //     .then((weather) => {
  //       return weather.json()
  //     }).then((res) => displayResult(res))
  // }
  // function displayResult(weather) {
  //   let city = document.querySelector('.location .city');
  //   let mainTemp = document.querySelector('.main-temp .temp');
  //   let wetherel = document.querySelector('.weather');
  //   let hilow = document.querySelector('.hi-low');
  //   city.innerHTML = `${weather.name}, ${weather.sys.country}`
  //   mainTemp.innerHTML = `${Math.floor(weather.main.temp)} <span> °C </span>`;
  //   wetherel.innerHTML = weather.weather[0].main
  //   hilow.innerHTML = `${weather.main.temp_min} °C / ${weather.main.temp_max} °C`
    // document.body.style.backgroundImage = "url(https://source.unsplash.com/1600x900/?" + weather.name + ")"
  // }
  return (
    <>

      <Col lg="3">
        <div className="allcard">
          <h4 className="Nick_name">Weather App</h4>

          <div className='line_001'></div>

          <input className='input_lock' type="text" placeholder="Location" />

          <button className='Enter'>Enter Location</button>


        </div>
      </Col>

    </>
  )
}
