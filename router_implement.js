import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

const ACTIVE = { color: 'red' }

class App extends React.Component {
   render() {
      return (
         <div>
            <ul>
               <li><Link to="/home" activeStyle={ACTIVE}>Home</Link></li>
               <li><Link to="/about" activeStyle={ACTIVE}>About</Link></li>
               <li><Link to="/contact" activeStyle={ACTIVE}>Contact</Link></li>
            </ul>
				
           {this.props.children}
         </div>
      )
   }
}


class Home extends React.Component {
   render() {
      return (
         <div>
            <h1>Home...</h1>
         </div>
      )
   }
}


class About extends React.Component {
   render() {
      return (
         <div>
            <h1>About...</h1>
         </div>
      )
   }
}



const Contact = () => (
  <div>
    <h3>Contact...</h3>
  </div>
)

ReactDOM.render((
  <Router history={browserHistory} >
    <Route path="/" component={App} >
      <Route path="about" component={About}/>
      <Route path="contact" component={Contact}/>
      <Route path="home" component={Home}/>
       </Route>
  </Router>
), document.getElementById('app'))

/*----------------------------------------------------------------------------------*/
/*Add the following code in index.html*/
<!DOCTYPE html>
<html lang = "en">

   <head>
      <meta charset = "UTF-8">
      <title>React App</title>
   </head>

   <body>
      <div id = "app"></div>
      <script src = "index.js"></script>
   </body>

</html>
/*----------------------------------------------------------------------------------*/