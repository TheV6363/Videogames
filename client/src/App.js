import './App.css';
import Home from './componentes/Home';
import LandingPage from './componentes/LandingPage';
import { BrowserRouter } from "react-router-dom"
import { Route } from "react-router-dom"
import { Switch } from "react-router-dom"
import VideogameCreate from "./componentes/VideogameCreate";
import Detail from "./componentes/Detail"


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/videogames" component={VideogameCreate}/>
      <Route exact path="/home/:id" component={Detail}/>
      </Switch>
    </div>
    </BrowserRouter> // TODA MI APP VA A TENER ACCESO A LAS RUTAS
  );
}

export default App;
