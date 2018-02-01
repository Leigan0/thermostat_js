'use strict';

describe('Thermostat', function(){
  var thermostat


  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('is initially set to 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20)
  });

  describe('increase', function() {
    it('increases the temperature', function(){
      thermostat.increaseTemp();
      expect(thermostat.temperature).toEqual(21)
    });
    it('will not allow temperature to increase above 25 degrees in powersaving mode', function(){
      thermostat.temperature = 25
      expect(function() {thermostat.increaseTemp()}).toThrow("Temperate can not be increased above 25 degrees in current mode")
    })
  });

  describe('decrease', function() {
    it('decreases the temperature', function(){
      thermostat.decreaseTemp(1);
      expect(thermostat.temperature).toEqual(19)
    });
    it('will not allow temperature to be reduced below 10 degrees', function(){
      thermostat.temperature = 10
      expect(function() {thermostat.decreaseTemp(1)}).toThrow("Temperature can not be reduced below 10 degrees")
    })
  });

  describe('powersaving', function() {
    it('powersaving mode can be turned on', function(){
      thermostat.powerSavingOn()
      expect(thermostat.powerSaving).toBe(true)
    });

    it('powersaving mode can be turned off', function(){
      thermostat.powerSavingOff()
      expect(thermostat.powerSaving).toBe(false)
    });

    it('powersaving mode is on by default', function(){
      expect(thermostat.powerSaving).toBe(true)
    })
  });
  describe('reset',function(){
    it('it resets the temperature to 20 degrees',function(){
      thermostat.temperature = 10
      thermostat.reset()
      expect(thermostat.temperature).toEqual(20)
    })
  })
  describe('report energy usage',function(){
    it('can return report medium energy usage',function(){
      expect(thermostat.currentUsage()).toEqual("medium-usage")
    })
    it('can return report low energy usage',function(){
      thermostat.temperature = 10
      expect(thermostat.currentUsage()).toEqual("low-usage")
    })
    it('can return report high energy usage',function(){
      thermostat.powerSavingOff()
      thermostat.temperature = 30
      expect(thermostat.currentUsage()).toEqual("high-usage")
    })
  })
})
