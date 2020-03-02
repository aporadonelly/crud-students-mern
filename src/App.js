import React, { Component } from 'react'
import Header from './layout/Header'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import CreateStudent from './components/CreateStudent'
import StudentList from './components/StudentList'
import EditStudent from './components/EditStudent'

export class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Header /> 
          <Route exact path="/" component={StudentList}></Route>
          <Route path="/create-student" component={CreateStudent}></Route>
          <Route path="/edit-student/:id" component={EditStudent}></Route>
        </Router>       
      </div>
    )
  }
}

export default App
