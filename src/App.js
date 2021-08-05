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
  
  render() {
    return (
      <div className="App">
        <TodoItems items={this.state.items} removeItem={this.removeItem} />
      </div>
    )
  }
}

export default App;