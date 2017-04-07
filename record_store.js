var RecordStore = function(name, city, balance) {
  this.name = name;
  this.city = city;
  this.balance = 0;
  this.inventory = [];
}

RecordStore.prototype = {

  addRecord: function(record){
    this.inventory.push(record)
  },

}

module.exports = RecordStore;