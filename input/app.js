/* global $:false, slabs:false */
'use strict';

// Send the settings object to the slabs core
// This object will then be passed to your back-end slabs process.
var compileObject = function (){

  // gets the value of the input box
  var tickInterval   = $('#tickInterval').val();

  var settings = {
    tickInterval : tickInterval,
  };

  console.log(settings);

  // submit the data to the slabs core, this also triggers the close of the iFrame.
  slabs.send(settings);

};
