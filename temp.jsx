import React from 'react';
import Collapsible from 'react-collapsible';
require('normalize.css');
require('./app.css');

var App = React.createClass({
 
  render: function() {
      var data = 	[
				{ 
					"name": "James Angus", 
					"age" : "22", 
					"job": "Dentist" 
				},
				{ 
					"name": "Milan Howen", 
					"age" : "36", 
					"job": "Truck Driver" 
				}	
			];
      var rows = data.map(function(row){
          console.log(row);
          var div = '<div>'
          x.forEach(function(item, index){
              div += '<Collapsible trigger = '+ {row.name} +'><p>'+ {x.job} +'</p> </Collapsible>';
          }
          div += '</div>';
          )
      });
          return(
            {rows}
          );
      }
  });


export default App;