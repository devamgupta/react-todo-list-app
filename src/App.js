import { Component } from 'react';
import './App.css';
import Form from './Form';
import TodoItems from './TodoItems';
import db from './firebase.js';
import firebase from "firebase/app";

class App extends Component {
  state = {
    items: [],
  };

  //  It runs after the component output has been rendered to the DOM
  componentDidMount() {
    this.loadItems();
  }

  // Get / Load data from firebase
  loadItems = () => {
    db.collection("items").orderBy("timestamp", "desc").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // console.log(doc.id)
          const item = {
            id: doc.id,
            todo: doc.data().todo,
          }
          this.setState({
            items: [...this.state.items, item],
          })
        });
    });
  }

  // Add / Upload Item
  addItem = (todo) => {
    db.collection("items").add({
        todo: todo,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then((docRef) => {
        // data is succesessfully added
        // do anything you want now
        const item = {
          id: docRef.id,
          todo: todo,
        }
        this.setState({
          items: [item, ...this.state.items],
        })
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
  }

  // Remove Item
  removeItem = (index) => {
    const {items} = this.state;
    this.setState({
      items: items.filter((todo, i) => {
        return i !== index
      })
    })
  }

  // Edit / Update Item
  editItem = (index) => {
    const {items} = this.state;
    const userInput = prompt("Enter the new value", items[index].todo);
    if (userInput) {
      const {items} = this.state;
      items[index].todo = userInput;
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
        
        <Form handleSubmit={this.addItem} numItems={this.state.items.length} />
      </div>
    )
  }
}

export default App;