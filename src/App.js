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
    this.selectAdd = this.selectAdd.bind(this);
    this.selectList= this.selectList.bind(this);
    this.selectPay = this.selectPay.bind(this);
  }
  selectAdd(e){
    console.log(e)
   this.setState({
     activeTabs:'add'
   })

  }
  selectList(){
    this.setState({
      activeTabs:'list'
    })
 
  }
  selectPay(){
    this.setState({
      activeTabs:'pay'
    })
 
  }

  render() {
    return(
      <div className="App"> 
      <Button onClick={this.selectAdd} isSelected={this.state.activeTabs==='add'}>Add</Button>
      <Button onClick={this.selectList} isSelected={this.state.activeTabs==='list'}>List </Button>
      <Button onClick={this.selectPay} isSelected={this.state.activeTabs==='pay'}>Pay</Button>
        
      
      </div>
    )
  }
}


export default App;
