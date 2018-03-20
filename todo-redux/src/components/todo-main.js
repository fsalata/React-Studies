import React, { Component } from 'react';


export default class TodoMain extends Component {
 constructor(){
     super();
 }

 render() {

    return (
      <div className="main">
        <h1>Todos Manager</h1>
        <input type="text"/>

        <ol className="todos">
            // list items go here
        </ol>
      </div>
    )
  }
}