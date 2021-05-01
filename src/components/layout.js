import React, { Component } from 'react';

import Header from "./header-navbar/header";
import NavBar from "./header-navbar/navbar";

class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        {this.props.children}
        <Header/>
        <NavBar/>
      </div>
    );
  }
}

export default Layout;
