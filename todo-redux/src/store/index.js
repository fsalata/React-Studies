import { createStore } from 'redux-box';
import { module as todoModule } from './todo'

export default createStore([
    todoModule
])