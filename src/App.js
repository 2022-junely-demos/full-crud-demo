import './App.css';
import Header from './components/Header/Header';
import { Redirect, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth';
import Posts from './components/Posts/Posts';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route path="/posts" component={Posts} />
        <Route path="*">
          <Redirect to="/auth/sign-in" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
