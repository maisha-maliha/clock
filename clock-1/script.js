const h = document.querySelectorAll('.hour')[0]
const m = document.querySelectorAll('.minute')[0]
const s = document.querySelectorAll('.sec')[0]
const date = document.querySelectorAll('.date')[0]
const day = document.querySelectorAll('.day')[0]
const mo = document.querySelectorAll('.m')[0]
const year = document.querySelectorAll('.year')[0]
const body = document.body

const button = document.querySelectorAll('.button')[0]
const ball = document.querySelectorAll('.ball')[0]

button.addEventListener('click', clicked)
let j = 1
function clicked () {
  if (j === 0) {
    ball.style = 'transform: translateX(0px);background-color:black'
    button.style = 'background-color:white;border:black'
    h.style.color = 'white'
    m.style.color = 'white'
    s.style.color = 'white'
    date.style.color = 'white'
    mo.style.color = 'white'
    day.style.color = 'white'
    year.style.color = 'white'
    body.style = 'background-color:black'

    j++
  } else {
    ball.style = 'transform: translateX(60px);background-color:white'
    button.style = 'background-color:black;border:white'
    h.style.color = 'black'
    m.style.color = 'black'
    s.style.color = 'black'
    date.style.color = 'black'
    mo.style.color = 'black'
    day.style.color = 'black'
    year.style.color = 'black'
    body.style = 'background-color:white'
    j--
  }
}

setInterval(time, 1000)

function time () {
  const d = new Date()
  h.innerHTML = d.getHours()
  m.innerHTML = ' : ' + d.getMinutes()
  s.innerHTML = ' : ' + d.getSeconds()
  date.innerHTML = ', ' + d.getDate() + ' '
  getMo()
  getd()
  year.innerHTML = ' ' + d.getFullYear()

  function getd () {
    if (d.getDay() === 0) {
      day.innerHTML = 'SUN'
    } else if (d.getDay() === 1) {
      day.innerHTML = 'MON'
    } else if (d.getDay() === 2) {
      day.innerHTML = 'TUE'
    } else if (d.getDay() === 3) {
      day.innerHTML = 'WED'
    } else if (d.getDay() === 4) {
      day.innerHTML = 'THU'
    } else if (d.getDay() === 5) {
      day.innerHTML = 'FRI'
    } else if (d.getDay() === 6) {
      day.innerHTML = 'SAT'
    }
  }
  function getMo () {
    if (d.getMonth() === 0) {
      mo.innerHTML = 'January'
    } else if (d.getMonth() === 1) {
      mo.innerHTML = 'February'
    } else if (d.getMonth() === 2) {
      mo.innerHTML = 'March'
    } else if (d.getMonth() === 3) {
      mo.innerHTML = 'April'
    } else if (d.getMonth() === 4) {
      mo.innerHTML = 'May'
    } else if (d.getMonth() === 5) {
      mo.innerHTML = 'june'
    } else if (d.getMonth() === 6) {
      mo.innerHTML = 'July'
    } else if (d.getMonth() === 7) {
      mo.innerHTML = 'August'
    } else if (d.getMonth() === 8) {
      mo.innerHTML = 'September'
    } else if (d.getMonth() === 9) {
      mo.innerHTML = 'October'
    } else if (d.getMonth() === 10) {
      mo.innerHTML = 'November'
    } else if (d.getMonth() === 11) {
      mo.innerHTML = 'December'
    }
  }
}
