import React, { Component } from 'react'
import Navbar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero";

import GlobalStyle from './Styles/Global';

class App extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {

    return (
      <>
        <Navbar 
          navbarState={this.state.navbarOpen} 
          handleNavbar={this.handleNavbar}
        />
        <Hero />
        <GlobalStyle />
      </>
    )
  }
}

export default App