import React from 'react';
import ReactDOM from 'react-dom';
import {NavBar} from './components/NavBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {AddToDiary} from './components/AddToDiary';
import {ViewAll} from './components/ViewFromDiary';
import './index.css';

const DigitalDiary=()=>{
  
  

  return(
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path='/'>
            <h1 align="center">Welcome To Digital Diary APP!</h1>
          </Route>

        <Route path='/add'>
         <AddToDiary/>
         

        </Route>

        <Route exact path='/viewAll'>
          <ViewAll/>

        </Route>


      </Switch>
    </Router>
  )
}





ReactDOM.render(
  <DigitalDiary/>
  ,
  document.getElementById('root')
);


