setInterval(function () {
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElemant = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkTime = moment().tz("America/New_York");

  newYorkDateElemant.innerHTML = newYorkTime.format("dddd, MMMM Do YYYY");
  newYorkTimeElement.innerHTML = newYorkTime.format("HH:mm:ss");


  let parisElement = document.querySelector("#paris");
  let parisDateElemant = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europ/Paris");

  parisDateElemant.innerHTML = parisTime.format("dddd, MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format("HH:mm:ss");
  

  let singaporeElement = document.querySelector("#singapore");
  let singaporeDateElemant = singaporeElement.querySelector(".date");
  let singaporeTimeElement = singaporeElement.querySelector(".time");
  let singaporeTime = moment().tz("Asia/Singapore");

  singaporeDateElemant.innerHTML = singaporeTime.format("dddd, MMMM Do YYYY");
  singaporeTimeElement.innerHTML = singaporeTime.format("HH:mm:ss");
}, 1000);