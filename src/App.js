import { Component } from 'react';
import './App.css';
import TodoItems from './TodoItems';

class App extends Component {
  state = {
    items: ["Go for a walk.", "Complete assignment.", "Have Lunch."],
  };

  render() {
    return (
      <div className="App">
        <TodoItems items={this.state.items} />
      </div>
    )
  }
}

export default App;