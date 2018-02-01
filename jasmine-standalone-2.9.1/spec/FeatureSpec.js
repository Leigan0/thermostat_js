'use strict';

describe('Feature Test:', function(){
  var thermostat;

  beforeEach (function(){
    thermostat = new Thermostat();

  });

  it('can change temperature', function(){
    expect(thermostat.temperature).toEqual(20)
    thermostat.increaseTemp()
    expect(thermostat.temperature).toEqual(21)
    thermostat.decreaseTemp()
    expect(thermostat.temperature).toEqual(20)
  });

  it('keeps temperature between min of 10 and max of 25 degrees in power saving mode', function(){
    thermostat.powerSavingOn()
    thermostat.temperature = 10
    expect(function() {thermostat.decreaseTemp()}).toThrow("Temperature can not be reduced below 10 degrees")
    thermostat.temperature = 25
    expect(function() {thermostat.increaseTemp()}).toThrow("Temperate can not be increased above 25 degrees in current mode")
  })

  it('keeps temperature between min of 10 and max of 32 degrees in power saving mode', function(){
    thermostat.powerSavingOff()
    thermostat.temperature = 32
    expect(function() {thermostat.increaseTemp()}).toThrow("Temperate can not be increased above 32 degrees in current mode")
  })
  it('can reset the temperate back to default temperature 20 degrees',function(){
    thermostat.increaseTemp()
    thermostat.decreaseTemp()
    thermostat.reset()
    expect(thermostat.temperature).toEqual(20)
  })

  it('can return current energy usage',function(){
    expect(thermostat.currentUsage()).toEqual("medium-usage")
    thermostat.temperature = 10
    expect(thermostat.currentUsage()).toEqual("low-usage")
    thermostat.powerSavingOff()
    thermostat.temperature = 30
    expect(thermostat.currentUsage()).toEqual("high-usage")
  })
});
