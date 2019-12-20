import React from 'react';
import {BrowserRouter as Router ,Switch,Route,Link} from 'react-router-dom'
import './App.scss';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Projects" >Projects</Link></li>
      </ul>
      </div>
      <Switch>        
        <Route path="/Projects">
        <div>Projects</div>
        </Route>
        <Route path="/">
        <div>home</div>
        </Route>
      </Switch>
    </Router>
    
    
  );
}

export default App;
