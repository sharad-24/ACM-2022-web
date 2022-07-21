import React from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from "./container/Home";
import Contact from "./container/Contact";
import Prodigy2021 from './container/Prodigy2021';
import Sponsors from './container/Sponsors';
import Event from './container/Event';
import Team from './container/Team';
import Csr from './container/Csr';
import Prodigy2020 from './container/Prodigy2020';
import Prodigy2019 from './container/Prodigy2019';
import Prodigy2022 from './container/Prodigy2022';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
        <Switch>
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Switch>
          <Route exact path='/prodigy2021' component={Prodigy2021} />
        </Switch>
        <Switch>
          <Route exact path='/sponsor' component={Sponsors} />
        </Switch>
        <Switch>
          <Route exact path='/event' component={Event} />
        </Switch>
        <Switch>
          <Route exact path='/team' component={Team} />
        </Switch>
        <Switch>
          <Route exact path='/csr' component={Csr} />
        </Switch>
        <Switch>
          <Route exact path='/prodigy2020' component={Prodigy2020} />
        </Switch>
        <Switch>
          <Route exact path='/prodigy2019' component={Prodigy2019} />
        </Switch>
        <Switch>
          <Route exact path='/prodigy2022' component={Prodigy2022} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;


