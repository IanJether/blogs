

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Blogdetails from './components/Blogdetails';
import Blogpost from './components/Blogpost';
import Navbar from './components/Navbar';
import Newblog from './components/Newblog';





function App() {



 
  return (
    <Router>
      <div className="App">
        <div className="navbar-comp">
          <Navbar></Navbar>  
        </div>
        <div className="switch-contents">
          <Switch>
              <Route path='/Newblog'>
                  <Newblog/>
              </Route>
              <Route path='/'>
                  <Blogpost/>
              </Route>
          </Switch>
        </div>
       
      </div>
    </Router>
  );
}

export default App;
