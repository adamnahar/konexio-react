import React from 'react';
import './App.css';
import Button from './components/button';
import Add from './components/add';
import List from './components/list';
import Pay from './components/pay';

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      activeTabs: 'add',
      items: []
    }
  }

  render() {
    return(
      <div className="App"> 
      <Button isSelected={this.state.activeTabs==='add'}>Add</Button>
      <Button isSelected={this.state.activeTabs==='list'}>List </Button>
      <Button isSelected={this.state.activeTabs==='pay'}>Pay</Button>
        
      
      </div>
    )
  }
}


export default App;
