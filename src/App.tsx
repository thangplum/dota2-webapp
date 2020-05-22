import * as  React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Store } from 'redux';
import { History } from 'history';
import { ApplicationState } from './store';
import Routes from './routes';
import { Layout } from 'antd';

interface MainProps {
  store: Store<ApplicationState>
  history: History
}


const App: React.FC<MainProps> = ({store, history}) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="App">
        <Layout>
          <Routes />
        </Layout>
      </div>
    </ConnectedRouter>
  </Provider>
  
)

export default App;
