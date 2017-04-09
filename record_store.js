var _ = require('lodash');

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

 sellRecord: function(record){
    this.balance += record.price
   this.inventory.splice(record)
 },

 totalValue: function(genre){
   return _.reduce(this.filteredInventory(genre), function(sum, item){
     // console.log(sum);
     return sum + item.price;
   },0);
 },

 filteredInventory: function(genre){
   if(!genre) return this.inventory;
   return _.filter(this.inventory, function(record){
     return record.genre === genre;
   })
 },

}

module.exports = RecordStore;