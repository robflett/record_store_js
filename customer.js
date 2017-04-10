var _ = require('lodash');

var Customer = function(name, cash){
  this.name = name;
  this.cash = cash;
  this.collection = [];
};

Customer.prototype = {

  buyRecord: function(record){
    if (this.cash < record.price) {
      console.log("Sorry, you don't have enough cash!")
      var remaining = this.cash;
      return remaining
    }
    else
    this.cash -= record.price
    this.collection.push(record)
  },

 sellRecord: function(record){
    this.cash += record.price
   this.collection.splice(record)
 },


 totalValue: function(genre){
   return _.reduce(this.filteredCollection(genre), function(sum, item){
     // console.log(sum);
     return sum + item.price;
   },0);
 },

 filteredCollection: function(genre){
   if(!genre) return this.collection;
   return _.filter(this.collection, function(record){
     return record.genre === genre;
   })
 },

 findMostValuable: function(){
  var mostValuableRecord = _.max(this.collection, function (obj) {
    return obj.price;
  });
  
  return mostValuableRecord.price
 },

 sortByValue: function(){
  var returnValue = this.collection.sort(function(a, b) {
       parseFloat(a.price) - parseFloat(b.price);
  });
  return  returnValue.toString()
 },

 compareCollections: function(customerToCompare){
  if (this.totalValue() < customerToCompare.totalValue()) {
    return customerToCompare.name + " has the most valuable collection"}
    else {
      return this.name + " has the most valuable collection"
    }
  

 }

}

module.exports = Customer;