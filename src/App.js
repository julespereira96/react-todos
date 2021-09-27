import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
    };
  }

  updateInput(key, value) {
    //update react state
    this.setState({
      [key]: value,
    });
  }

  addItem() {
    if (this.state.newItem === "") {
      alert("enter a value");
      return;
    }
    //create item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
    };
    //copy of current list of items
    const list = [...this.state.list];

    // add new item to list
    list.push(newItem);

    //update state with new list and reset newItem input
    this.setState({
      list,
      newItem: "",
    });
  }

  deleteItem(id) {
    //copy current  list of items
    const list = [...this.state.list];

    //filter out item being deleted
    const updateList = list.filter((item) => item.id != id);

    this.setState({ list: updateList });
  }

  render() {
    return (
      <div className="App">
        <div className="todos">
          <div className="Heading">
            My To Do List....
            <br />
            <div className="todosContent">
              <input
                type="text"
                placeholder="Title...."
                value={this.state.newItem}
                onChange={(e) => this.updateInput("newItem", e.target.value)}
              />
              <span className="Addbtn" onClick={() => this.addItem()}>
                Add
              </span>
            </div>
          </div>
          <br />
          <ul className="myUL">
            {this.state.list.map((item) => {
              return (
                <li key={item.id}>
                  {item.value}
                  <span
                    className="close"
                    onClick={() => this.deleteItem(item.id)}
                  >
                    X
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
