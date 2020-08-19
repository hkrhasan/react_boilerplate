import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Layout from './hoc/Layout'

// component
import Home from './containers/Home'
import About from './containers/About'
import BookAParcel from './containers/BookAParcel'
import Contact from './containers/Contact'
import Tracking from './containers/Tracking'
import Services from './containers/Services'


function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/book-parcel' component={BookAParcel} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/track' component={Tracking} />
          <Route exact path='/services' component={Services} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
