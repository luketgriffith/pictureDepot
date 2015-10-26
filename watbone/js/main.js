import $ from 'jquery';  
import _ from 'underscore';
import moment from 'moment';

console.log('Hello, World');
$.ajaxSetup({    //automatically adds these headers to any request that Backbone makes (using $jaKweery)
  headers:  {
    'X-Parse-Application-Id': 'IEY4OWRBkXy1ZMbH1ey4mYEg5D1NqlRiSzcM4Opy',
    'X-Parse-REST-API-Key': 'DEbiF5yGKCSlXQd2uuiIRMLZdge5e5qNR8064MiH'
  }
}); 

import objectModel from './objects';
import objectGroup from './object_collection';
import ObjectTemplate from './object_template'

let group = new objectGroup(); 

function draw(data){
  let stuff = $('<div></div>')
  group.each(function(x){
  let data = x.toJSON();
    
    let things = $(ObjectTemplate(data));
    stuff.append(things);
    
  })
  $('.itemBox').html(stuff);

  
}  

  


 
group.fetch().then(draw);  //fetch data and then render people

