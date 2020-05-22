import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import IndexPage  from './pages/index';
import TeamsPage from './pages/teams/index';

const Routes: React.SFC = () => (
    <div>
        <NavBar />
        <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route path="/teams" component={TeamsPage} />
            <Route component={() => <div>Not Found</div>} />
        </Switch>
    </div>
    
)
  
  export default Routes
