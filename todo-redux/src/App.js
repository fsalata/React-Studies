import React, { Component } from 'react';
import { Provider}  from 'react-redux';
import store from './store'
import TodoMain from './components/todo-main'

class App extends Component {
  render() {
    return (
      <Provider store={ store } >
        <div className="App">
           <TodoMain></TodoMain>
        </div>
      </Provider>
    );
  }
}

export default App;
