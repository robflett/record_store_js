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
    record3 = new Record("Prince", "Purple Rain", "pop", 10)
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

  

  

})