import React, { Component } from 'react'
import Navbar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero";
import Categories from "./Components/Categories";
import Banner from "./Components/Banner";

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
      <>
        <Navbar 
          navbarState={this.state.navbarOpen} 
          handleNavbar={this.handleNavbar}
        />
        <Banner />
        <Hero />
        <Categories />
        <GlobalStyle />
      </>
    )
  }
}

export default App