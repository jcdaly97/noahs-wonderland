import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Switch>

          <Route path='/'>
            <h1>Noah</h1>
          </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;
