import React from 'react';
import logo from './logo.svg';
import './App.css';

import Lifecycles from './component/lifecycles/lifecycles.component';
import { Cta } from './component/cta/cta.component.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      showChild: true,
      text: ''
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Cta text={'Toggle Lifecycles'}
            handleClick={() =>
              this.setState(state => ({
                showChild: !state.showChild
              }))}
          />
          
          <Cta text={'Update Text'} 
            handleClick={() =>
              this.setState(state => ({
                text: state.text + '_hello'
              }))} 
          />
          {this.state.showChild ? <Lifecycles text={this.state.text} /> : null}
        </header>
      </div>
    );
  }
}

export default App;
