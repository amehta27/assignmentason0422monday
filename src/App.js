import React, { Component } from 'react';
import {Menu} from './Menu'
import {Details} from './Details'
import {Subcat1} from './Subcat1'
import {Subcat2} from './Subcat2'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <div>
      <Menu></Menu>
      </div>
      <div>
      <Details></Details>
      </div>
      <div><Subcat1></Subcat1><br/></div>
      <div></div>
      <div><Subcat2></Subcat2></div>
      </div>
      
    )
  }
}

export default App;
