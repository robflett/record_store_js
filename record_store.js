var RecordStore = function(name, city) {
  this.name = name;
  this.city = city;
  this.balance = 0;
  this.inventory = [];
}

RecordStore.prototype = {

  addRecord: function(record){
    this.inventory.push(record)
  },

 printProperties: function(){
   var properties = this.inventory.map(function(record){
      return "Artist: " + record.artist + ", Title: " + record.title + ", Genre: " + record.genre + ", Price: " + record.price
    })  
    return properties
 },

}

module.exports = RecordStore;