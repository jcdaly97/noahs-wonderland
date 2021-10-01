import './styles/styles.css';
import NavBar from './components/NavBar';
import MissionPage from './components/mission/MissionPage';
import AboutPage from './components/about/AboutPage';
import ChatPage from './components/chat/ChatPage';
//import Landing from './components/landing/Landing';
import PicsPage from './components/pics/PicsPage';
import SchedulePage from './components/schedule/SchedulePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './state/store';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <NavBar />
          <main>
            <Switch>

              <Route exact path='/'>
                <h1>Noah</h1>
              </Route>

              <Route path='/mission'>
                <MissionPage />
              </Route>

              <Route path='/pics'>
                <PicsPage />
              </Route>

              <Route path='/schedule'>
                <SchedulePage />
              </Route>

              <Route path='/chat'>
                <ChatPage />
              </Route>

              <Route path='/about'>
                <AboutPage />
              </Route>

            </Switch>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
