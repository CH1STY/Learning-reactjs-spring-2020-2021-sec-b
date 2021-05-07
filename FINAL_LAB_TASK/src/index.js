import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from './components/NavBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {AddToDiary} from './components/AddToDiary';
import {ViewAll} from './components/ViewFromDiary';
import {Login} from './components/Login';
import {EditEntry} from './components/EditEntry';
import './index.css';



const DigitalDiary=()=>{
  
  /*<Route exact path='/logout'>
      <Logout></Logout>
  </Route>*/
  

  return(
    <Router>
      <Switch>
        <Route exact path='/'>
            <Login></Login>
        </Route>
        <Route path='/diary'>
            <NavBar/>
            <Route exact path="/diary">
              <div  align="center">
                <h1>Welcom To Digital Diary!</h1>
                <h2 className="userName">{localStorage.getItem('username')}</h2>

              </div>
            </Route>
            <Route path='/diary/add'>
              <AddToDiary/>
            </Route>

            <Route exact path='/diary/viewAll'>
              <ViewAll/>
            </Route>

            <Route path='/diary/edit/:id'>
              <EditEntry></EditEntry>
            </Route>


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


