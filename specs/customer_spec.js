var assert = require('assert');
var Record = require('../record.js');
var RecordStore = require('../record_store.js');
var Customer = require('../customer.js');


describe('Customer Test', function(){

  var customer;
  var record1;
  var record2;
  var record3;
  var recordStore1;

  beforeEach(function(){
    customer = new Customer("Jeff", 50)
    customer2 = new Customer("Meg", 4)
    record1 = new Record("The Cure", "Friday, I'm in Love", "pop", 10)
    record2 = new Record("Ash", "Kung Fu", "pop", 8)
    record3 = new Record("Prince", "Purple Rain", "rock", 10)
    recordStore1 = new RecordStore("Vinyl Attack", "Perth")
  });

it('should be unable to buy record if not enough cash', function(){
  customer2.buyRecord(record3);
  assert.strictEqual(0, customer2.collection.length);
});

});