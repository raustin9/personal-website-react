import './App.css';
import Sidebar from './components/Sidebar/Sidebar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {Home} from './pages/Home'
import {Aboutme , Education , Hobbies , PersonalStatement , Organizations} from './pages/Aboutme'
import {Projects , PortfolioSite , Project2 , Project3} from './pages/Projects'
import {Contact} from './pages/Contact'
import {Music} from './pages/Music'

function App() {
  return (
    <div>

      
        <Router>
          
          
          <Sidebar />
          <Home />
              <Switch>
                
                <Route path="/home" exact component={Home} />

                <Route path="/aboutme" exact component={Aboutme} />
                <Route path="/aboutme/personalstatement" exact component={PersonalStatement} />
                <Route path="/aboutme/education" exact component={Education} />
                <Route path="/aboutme/hobbies" exact component={Hobbies} />
                <Route path="/aboutme/organizations" exact component={Organizations} />

                <Route path="/projects" exact component={Projects} />
                <Route path="/projects/portfolio" exact component={PortfolioSite} />
                <Route path="/projects/project2" exact component={Project2} />
                <Route path="/projects/project3" exact component={Project3} />

                <Route path="/contact" exact component={Contact} />

                <Route path="/music" exact component={Music} />
                
              </Switch>
        </Router>

      </div>
  );
}

export default App;
