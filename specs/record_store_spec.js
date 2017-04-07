var assert = require('assert');
var Record = require('../record.js');
var RecordStore = require('../record_store.js');


describe('RecordStore Test', function(){

  var record1;
  var recordStore1;

  beforeEach(function(){
    record1 = new Record("The Cure", "Friday, I'm in Love", "pop", 10)
    recordStore1 = new RecordStore("Vinyl Attack", "Perth")
  })

  it('inventory is empty', function(){
    assert.strictEqual(0, recordStore1.inventory.length)
  })

})