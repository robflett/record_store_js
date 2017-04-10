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
  var maxValue = _.max(this.collection, function (obj) {
    return obj.price;
  });
 },

 sortByValue: function(){
  this.collection.sort(function(a, b) {
      return parseFloat(a.price) - parseFloat(b.price);
  });
 }

}

module.exports = Customer;