
import './App.css';
import TodoCard from './components/TodoCard'
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <h1>Noah</h1>
      <div className='todo-widget'>
        <h2 className='todo-header'>todos</h2>
        <div className='todo-box'>
          <TodoCard />
        </div>
      </div>
    </div>
  );
}

export default App;
