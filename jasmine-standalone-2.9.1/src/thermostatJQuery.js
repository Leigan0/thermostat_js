$(document).ready(function(){
  var thermostat = new Thermostat;
  updateTemperature();

  function updateTemperature(){
    $('#currentTemp').text(thermostat.temperature)
    $('#currentTemp').attr('class', thermostat.currentUsage())
  }

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
