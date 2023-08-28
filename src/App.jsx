
  
import "./app.scss"
import Home from "./pages/Homepage/Home";
import Watch from "./pages/watch/watch";
import Register from "./pages/register/Register";
// import Watch from "./pages/watch/Watch";
 import Login from "./pages/login/Login";
 import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

const App = () => {
  return (
       <Router>
         <Switch>
                    <Route exact path="/">
                      <Home/>
                    </Route>
                    <Route path="/login"><Login/></Route>  
                    <Route path="/register"><Register/></Route> 
                    <Route path="/Movies"><Home type="movie"/></Route>
                    <Route path="/Series"><Home type="series"/></Route>
                    <Route path="/watch"><Watch/></Route>    
                    
            </Switch>
       </Router>
            
            )
};

export default App;