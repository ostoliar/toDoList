import React, { Component } from "react";
import classes from './ToDo.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: [],
    };
  }

  updateInput(key, value) {
    // update react state
    this.setState({
      [key]: value
    });
  }

  addItem() {
    //  create item with uniqe id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };
// copy of current list of items
    const list = [...this.state.list];

    // add new item to list
    list.push(newItem)
    // update state with new list and reset newItem input
    this.setState({
      list,
      newItem:""
    });
  }

  deleteItem(id){
    // copy current list of items
    const list = [...this.state.list];

    // filter out item being deleted
    const updateList = list.filter(item => item.id !== id);

    this.setState({list: updateList});
  }

  render() {
    return (
      <div className="App">
        <div className="ToDo">
          <p className="MyList">To Do List</p>
          Add an Item..
          <br />
          <div>
          <input
          className="input"
            type="text"
            placeholder="Type item here..."
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          >
           
          </input>
          <button className="button" onClick={() => this.addItem()}>Add</button>
          </div>
         
          <br/>
          <ul>
            {this.state.list.map(item => {
              return(
                <li className="list" key={item.id}>
                  {item.value}
                  <button className="closeBtn" onClick={() => this.deleteItem(item.id)}>X</button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
