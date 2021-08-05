import { Component } from 'react';
import './App.css';
import TodoItems from './TodoItems';

class App extends Component {
  state = {
    items: ["Go for a walk.", "Complete assignment.", "Have Lunch."],
  };

  // Remove
  removeItem = (index) => {
    const {items} = this.state;
    this.setState({
      items: items.filter((todo, i) => {
        return i !== index
      })
    })
  }

  // Edit / Update
  editItem = (index) => {
    const {items} = this.state;
    const userInput = prompt("Enter the new value", items[index]);
    if (userInput) {
      const {items} = this.state;
      items[index] = userInput;
      this.setState({
        items: items,
      })
    } else {
      alert("Can't add empty item!");
    }
  }

  // Render
  render() {
    return (
      <div className="App">
        <TodoItems items={this.state.items} editItem={this.editItem} removeItem={this.removeItem} />
      </div>
    )
  }
}

export default App;