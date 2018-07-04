import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      component: 'home'
    }
    this.currentView = this.currentView.bind(this)
    this.chooseView = this.chooseView.bind(this)
  }

  chooseView(display) {
    this.setState({component: display})
  }
  
  currentView() {
    let component
    switch(this.state.component){
      case 'home':
        component = <Homepage/>
          break;
      case 'component b':
        component = <ComponentB/>
          break;
      default:
        component = <Homepage/>
    }
  }
  
  
  
  
  render() {
    return (
      <div className="App">



      </div>
    );
  }
}

export default App;
