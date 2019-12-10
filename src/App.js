import React, { Component } from 'react'
import Navbar from "./Components/NavBar/NavBar";
import Homepage from "./Components/Homepage";
import ProductPage from "./Components/ProductPage";
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import GlobalStyle from './styles/Global';
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
        <Navbar 
          navbarState={this.state.navbarOpen} 
          handleNavbar={this.handleNavbar}
        />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/products" component={ProductPage} /> 
        </Switch>
        <GlobalStyle />
      </BrowserRouter>
    )
  }
}

export default App