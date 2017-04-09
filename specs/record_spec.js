var assert = require('assert');
var Record = require('../record.js');
var RecordStore = require('../record_store.js');

describe('Record Test', function(){

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

  it('should print out a records details', function(){
    assert.deepEqual("Artist: Ash, Title: Kung Fu, Genre: pop, Price: 8", record2.printRecord())
  })

  

}) 