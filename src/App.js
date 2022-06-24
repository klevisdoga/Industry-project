import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import PageNav from './Components/PageNav/PageNav';
import PageFooter from './Components/PageFooter/PageFooter';
import OurMission from './Pages/OurMission/OurMission'
import DataScience from './Pages/DataScience/DataScience'
import MarketingPage from './Pages/MarketingPage/MarketingPage'
import UXPage from './Pages/UXPage/UXPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <PageNav />
      <Switch>
        <Route path={'/'} exact component={HomePage}/>
        <Route path={'/our-mission'} component={OurMission}/>
        <Route path={'/data-science'} component={DataScience}/>
        <Route path={'/marketing'} component={MarketingPage}/>
        <Route path={'/ux-ui'} component={UXPage}/>
      </Switch>
      <PageFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
