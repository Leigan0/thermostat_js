// var env = require('require-env');
// api_key = env.require('API_KEY')
//
// console.log(api_key)

$(document).ready(function(){
  var thermostat = new Thermostat;
  updateTemperature();
  hidePowerSaveButton();
  displayWeather('Wakefield')

  function updateTemperature(){
    $('#currentTemp').text(thermostat.temperature)
    $('#currentTemp').attr('class', thermostat.currentUsage())
  }
    function hidePowerSaveButton(){
      if (thermostat.powerSaving) $("#turnPowerSaveOn").hide();
    }

    function displayWeather(city){
      var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
      var token = '&appid=dfab0b20270092f2eb7795e16c8d3077'
      var units = '&units=metric'
      $.get(url + token + units, function(response) {
      $("#temp").html( response.main.temp );
      $("#weather").html( response.weather[0].description );
      $("#current-location").text(city)
    })
  }

    $('#select-city').submit(function(event) {
      event.preventDefault();
      var city = $('#current-city').val();
      displayWeather(city)
  })

  $("#turnPowerSaveOn").click(function(event){
    thermostat.powerSavingOn();
    $(this).hide("slow");
    $("#turnPowerSaveOff").show("slow");
  })

  $("#turnPowerSaveOff").click(function(event){
    thermostat.powerSavingOff();
    $(this).hide("slow");
    $("#turnPowerSaveOn").show("slow");
  })

  $("#increaseTemp").click(function(event){
    thermostat.increaseTemp()
    updateTemperature();
  })

  $("#decreaseTemp").click(function(event){
    thermostat.decreaseTemp()
    updateTemperature();
  })

  $("#resetTemp").click(function(event){
    thermostat.reset()
    updateTemperature();
  })
})
