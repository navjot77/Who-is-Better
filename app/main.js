const React=require('react');
const ReactDom=require('react-dom');
require('./main.css');


class App extends React.Component{
    render(){
        return (<h2> Welcome </h2>)
    }

}

ReactDom.render(<App/>, document.getElementById('app'));