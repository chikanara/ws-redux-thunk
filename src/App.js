
import './App.css';
import Nav from './components/Nav/Nav';
import UserList from './components/UserList/UserList';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Detail from './components/Detail/Detail';


function App() {
  return (
    <div className="App">
      <Router>
      <Nav/>
      <Route path="/" component={UserList} exact />
     <Route path="/user/:id" render={(props) => <Detail {...props}/>}/>
      
      </Router>
    </div>
  );
}

export default App;
