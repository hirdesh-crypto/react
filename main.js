import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import Apple from './jsonAccordion.jsx';
require('./main.css')
const ACTIVE = { color: 'red' };
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
    render() {
        return (
            <div>
                {this.state.data.map((dynamicComponent, i) => <Content
                    key = {i} componentData = {dynamicComponent}/>)}
            </div>
        );
    }
}
var getApple =  function(a) {
    ReactDOM.render(<Apple tags={a}/>, document.getElementById('accordion'));
}

var style = {ACTIVE};
export class Content extends React.Component {
    render() {
        var url1 = this.props.componentData.url;
        /*console.log(url1);*/
        if(url1 == 'order-issues'){
            style = ACTIVE
        }
        return (
            <div>
                <ul>
                    <li onClick={() => {getApple(url1)}}><Link to={{ pathname: '/', query: { tag: this.props.componentData.url} } }  activeStyle={ACTIVE}>{this.props.componentData.name}</Link></li>
                </ul>
            </div>
        );

    }
}

/*compCaller = function () {

}*/
ReactDOM.render(<Apple tags='order-issues'><Content style={style}></Content></Apple>,document.getElementById('accordion'));

ReactDOM.render((
    <Router history={browserHistory} >
        <Route path="/" component={App} >
        </Route>
    </Router>
), document.getElementById('app'));
