const state = {
    items: [],  
    active_todo: null
}

const actions = {
    addTodo : (todo) => ({
         type: 'ADD_TODO' , 
         todo }) ,
    toggleTodoStatus : (todo) => ({
        type : 'TOGGLE_TODO', 
        todo}),
    deleteTodo : (todo) => ({
        type : 'DELETE_TODO',
        todo
    })
}

const mutations ={
    ADD_TODO : (state, action) => state.items.push(action.todo),

    TOGGLE_TODO : (state, {todo}) => {
       state.items = state.items.map(item => {
           if(item.id== todo.id)
               item.completed = !item.completed
           return item
       });
    },
    DELETE_TODO : (state, {todo}) => {
       let index = state.items.findIndex(item => item.id==todo.id);
       state.items.splice(index, 1);
    }

}

export const module = {
    name : 'todos',
    state, 
    actions, 
    mutations
}