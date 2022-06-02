import React from 'react'
import NavBar from './components/layout/NavBar'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NotFound from './components/pages/NotFound'
import AddUser from './components/Users/AddUser'
import EditUser from './components/Users/EditUser'
import UserView from './components/Users/UserView'

const App = () => {

  return(
    <Router>
      <div>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/users/add" component={AddUser}/>
        <Route exact path="/users/:id" component={UserView}/>
        <Route exact path="/users/edit/:id" component={EditUser}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
    </Router>
  )

}

export default App
