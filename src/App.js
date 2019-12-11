import React, { Component } from 'react'
import Nav from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import ProductPage from "./Components/ProductPage";
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import Footer from './Components/Footer';
import './styles/main.scss'

class App extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {

    return (
      <BrowserRouter>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/products" component={ProductPage} /> 
        </Switch>
        <Footer/>
      </BrowserRouter>
    )
  }
}

export default App