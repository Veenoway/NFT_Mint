import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
