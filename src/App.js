import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Todo from './Pages/Todo/Todo';
import { QueryClient, QueryClientProvider } from 'react-query';
import GlobalState from './Context/Global/GlobalState';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalState>
          <Router>
            <div className="home-page-title-con">
              <h1>todo list</h1>
            </div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/:slug" component={Todo} />
            </Switch>
          </Router>
        </GlobalState>
      </QueryClientProvider>
    </>
  );
}

export default App;
