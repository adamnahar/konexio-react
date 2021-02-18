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
    this.add = this.add.bind(this);
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
  add(name, price ){
    const obj = {
      name: name,
      price: price
    }
    const newList = this.state.items
  newList.push(obj)
  this.setState({
    items: newList
  })
}
add(name, price) {
  console.log("je suis dans add",name)
  const obj = {
    name: name,
    price: price
  }
  console.log("ddd",this.state.items)
  const newList = this.state.items
  newList.push(obj)
  this.setState({
    items: newList
  })
}
  renderContent = () => {
    switch(this.state.activeTabs) {
      case 'add':
        return <Add addItem={this.add}></Add>
      case 'list':
        return <List listItems={this.state.items}></List>
      case 'pay':
        return <Pay></Pay>
    }
  }
  render() {
    return(
      <div className="App"> 
      <Button onClick={this.selectAdd}>Add</Button>
      <Button onClick={this.selectList}>List </Button>
      <Button onClick={this.selectPay}>Pay</Button>
      {this.renderContent()}
      </div>
    )
  }
}


export default App;
