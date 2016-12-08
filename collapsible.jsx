import React from 'react';
import Collapsible from 'react-collapsible';
require('./app.css');


var App = React.createClass({


  render: function() {
    return(
      <div>

        <Collapsible trigger="Start here">
          <p>This is the collapsible content. It can be any element or React component you like.</p>
          <p>It can even be another Collapsible component. Check out the next section!</p>
        </Collapsible>
         <Collapsible trigger="Start here">
          <p>This is the collapsible content. It can be any element or React component you like.</p>
          <p>It can even be another Collapsible component. Check out the next section!</p>
        </Collapsible>
    </div>
    );
  }

});

export default App;
