var assert = require('assert');
var Record = require('../record.js');
var RecordStore = require('../record_store.js');


describe('RecordStore Test', function(){

  var record1;
  var record2;
  var record3;
  var recordStore1;

  beforeEach(function(){
    record1 = new Record("The Cure", "Friday, I'm in Love", "pop", 10)
    record2 = new Record("Ash", "Kung Fu", "pop", 8)
    record3 = new Record("Prince", "Purple Rain", "rock", 10)
    recordStore1 = new RecordStore("Vinyl Attack", "Perth")
  });

  it('inventory is empty', function(){
    assert.strictEqual(0, recordStore1.inventory.length)
  });

  it('can add record', function(){
    recordStore1.addRecord(record1)
    recordStore1.addRecord(record2)
    assert.strictEqual(2, recordStore1.inventory.length)
  });

  it('should print out record properties', function(){
    recordStore1.addRecord(record1)
    assert.deepEqual(["Artist: The Cure, Title: Friday, I'm in Love, Genre: pop, Price: 10"], recordStore1.printProperties())
  });

  it('should be able to sell a record', function(){
    recordStore1.addRecord(record2)
    recordStore1.sellRecord(record2)
    assert.strictEqual(8, recordStore1.balance)
    assert.strictEqual(0, recordStore1.inventory.length)
  });

  it('should find the total inventory value', function() {
    recordStore1.addRecord(record3);
    recordStore1.addRecord(record1);
    recordStore1.addRecord(record2);
    assert.equal(28, recordStore1.totalValue());
  });

  // it('should find all records of a given genre', function(){
  //   recordStore1.addRecord(record3);
  //   recordStore1.addRecord(record1);
  //   recordStore1.addRecord(record2);
  //   assert.strictEqual([{artist: Prince genre: rock price: 10 title: Purple Rain }], recordStore1.filteredInventory("rock"));
  // });

  

})