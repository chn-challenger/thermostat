function Thermostat() {
  this.temperature = 20;
  this.powerSavingMode = true;
};

Thermostat.prototype.switchPowerSaving = function() {
  this.powerSavingMode = !this.powerSavingMode;
};

Thermostat.prototype.increaseTemperature = function() {
  if (this.temperature < 25 && this.powerSavingMode){
    this.temperature = this.temperature + 1;
  };
  if (this.temperature < 32 && !this.powerSavingMode){
    this.temperature = this.temperature + 1;
  };
};

Thermostat.prototype.decreaseTemperature = function() {
  if (this.temperature > 10) {
    this.temperature = this.temperature - 1;
  };
};

Thermostat.prototype.resetTemperature = function() {
  this.temperature = 20;
};

Thermostat.prototype.colour = function() {
  if (this.temperature < 18){
    return "green";
  }
  else if (this.temperature > 25) {
    return "red";
  }
  else {
    return "yellow";
  };
};
