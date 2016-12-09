import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

const ACTIVE = { color: 'red' }
class App extends React.Component {
   constructor() {
      super();

      this.state = {
         data: [
             {
                name : "How It Works",
                url: "how-it-works"
            },{
                name : "Order Issues",
                url: "order-issues"
            },{
                name : "Returns and Cancellations",
                url: "return-and-cancel"
            },{
                name : "Quality",
                url : "quality"
            },{
                name : "Sizing and Fitting",
                url : "fitting"
            },{
                name : "Referral",
                url : "referral"
            },{
                name : "Payments and Promotions",
                url : "payment"
            },{
                name : "Get in touch",
                url : "get-in-touch"
            },{
                name : "Deposits",
                url : "deposits"
            },{
                name : "Delivery Locations",
                url: "delivery"
            }
        ]
      }

   }
import HowItWorks from 'how-it-works'
   render() {
      return (
         <div>
               {this.state.data.map((dynamicComponent, i) => <Content
                  key = {i} componentData = {dynamicComponent}/>)}
            </div>
      );
   }
}

class Content extends React.Component {
   render() {
      return (
         <div>
             <ul>
               <li><Link to={"/" + this.props.componentData.url} activeStyle={ACTIVE}>{this.props.componentData.name}</Link></li>
            </ul>
         </div>
      );
   }
}


ReactDOM.render((
  <Router history={browserHistory} >
    <Route path="/" component={App} >
      <Route path="about" component={About}/>
      <Route path="contact" component={Contact}/>
      <Route path="home" component={Home}/>
       </Route>
  </Router>
), document.getElementById('app'))
