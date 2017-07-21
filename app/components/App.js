const React=require('react');
import Popular from './popular'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Nav } from './nav'
import {Home} from './home'
import Battle from './battle'
import StartFight from './StartFight';

class App extends React.Component{
    render(){
        return (
            <Router>
                <div className="container">
                 <Nav />
                    <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path='/popular' component={Popular}></Route>
                <Route exact path="/battle" component={Battle}></Route>
                <Route path="/battle/results" component={StartFight}></Route>
                <Route render={function(){return <h1>Page Not found</h1>}}></Route>
                    </Switch>
                </div>

            </Router>
                )
    }

}

export default App;
