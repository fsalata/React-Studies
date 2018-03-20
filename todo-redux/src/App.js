import { Provider}  from 'react-redux';
import store from './store'
import TodoMain from './components/TodoMain'

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
