import './App.css';

import { Route, Switch, withRouter } from 'react-router-dom'

import Inbox from './screen/Inbox'

function App() {
  return (
    <div className="App">
      <p>t'as plein de tâches en retard !</p>
      <Switch>
        <Route path='/' component={Inbox}/>
      </Switch>
    </div>
  );
}

export default App;
