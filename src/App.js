import React, { Component } from "react"
import "./App.css"
import ToDoPage from "./container/ToDoPage"

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDoPage />
      </div>
    )
  }
}

export default App
