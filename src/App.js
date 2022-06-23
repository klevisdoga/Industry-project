import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import PageNav from './Components/PageNav/PageNav';
import PageFooter from './Components/PageFooter/PageFooter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <PageNav />
      <Switch>
        <Route path={'/'} component={HomePage}/>
      </Switch>
      <PageFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
