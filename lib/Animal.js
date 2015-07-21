function Animal(type) {
  this.type = type;
  this.isAlive = true;
  this.isCute = false;
  this.health = 1;
 };

Animal.prototype.beCute = function(){
  this.isCute = true;
};

Animal.prototype.updateHealthStats = function (cb) {
  var self = this;

  setTimeout(function() {
    self.health = Math.random();
    cb();
}, 1500)


};

module.exports = Animal;
