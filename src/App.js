import './App.css'
import { BrowserRouter, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact';
import About from './pages/About';
import Article from './Article'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>My Articles</h1>
          <NavLink exact to='/' >Home</NavLink>
          <NavLink to='/about' >About</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          {/* route parameter below */}
          <Route path='/articles/:id'>
            <Article />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App

