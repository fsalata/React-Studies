import React, { Component } from 'react'
import {module as todoModule} from '../store/todos';
import {connectStore} from 'redux-box';
import cn from 'classnames';

@connectStore({
    todos : todoModule
})
class TodoMain extends Component {
 constructor(){
     super();
     this.state ={
         todo :  ''
     }
 }

 addTodo = (item) => {
    if(e.keyCode==13)
        todos.addTodo({
           id : Math.random(),
           text: this.state.todo,
           completed: false
        })          
  }

  render() {
    const {todos} = this.props
    return (
      <div className="main">
        <h1>Todos Manager</h1>
        <input type="text" value={this.state.todo}

        onChange={(e)=>{
            this.setState({ todo : e.target.value})
        }} 

        onKeyUp = {(e)=> this.addTodo(e.target.value)}
        />
        <ol className="todos">
            {  
                todos.items.map((item,i) => {
                    return <li 
                    className={cn({'completed': item.completed})} 
                    onClick={()=> todos.toggleTodoStatus(item) }
                    key={i}>
                        {item.text}
                       <i class="fa fa-trash"
                        onClick= { (item) => todos.deleteTodo(item) }
                        ></i>
                    </li>
                })
            }
        </ol>
      </div>
    )
  }
}

export default TodoMain