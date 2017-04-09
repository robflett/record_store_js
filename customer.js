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

}

module.exports = Customer;