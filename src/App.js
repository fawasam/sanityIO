import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//1:30
//components
import Home from './components/Home';
import About from './components/About';
import SinglePost from './components/SinglePost';
import Post from './components/Post';
import Project from './components/Project';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
          <Route component ={Home} path='/' exact />
          <Route component ={About} path='/about' />
          <Route component ={SinglePost} path='/post/:slug' />
          <Route component ={Post} path='/post' />
          <Route component ={Project} path='/project' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
