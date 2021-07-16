import '../App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Home from './Home';
import Category from './Category';
import NavBar from './NavBar';
import Info from './Info';
import Footer from './Footer';

const App=()=>{
return(
  <>
  <Router>
  <NavBar/>
  <Switch>
  <Route path='/' exact component={Home}></Route>
  <Route path='/category' exact component={Category}></Route>
  <Route path='/item/:id' exact component={Info}></Route>
  <Route path='/genre/:id' exact component={Home}></Route>
  </Switch>
  </Router>
  </>
)
  
}
export default App;
