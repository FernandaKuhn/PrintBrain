import { BrowserRouter, Switch, Route } from "react-router-dom";
import Contato from "./Pages/Contato";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './styles.css'

const Rota = () => {
  return(
    <BrowserRouter>
    <Header/>
    
    <Switch>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/services" exact={true} component={Services}/>
      <Route path="/contato" exact={true} component={Contato}/>
    </Switch>

    <Footer/>
    </BrowserRouter>
  )
}

export default Rota;