import React from 'react'
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Profile from "./components/Profile/Profile";
import Protected from "./components/Protected/Protected";
import MyFiles from "./components/Profile/MyFiles/MyFiles";
import AllFiles from "./components/Profile/AllFiles/AllFiles";
import AddFile from "./components/Profile/AddFile/AddFile";

function App() {

  return (
      <div>
          <Switch>
              {/*<Route path="/" exact component= {Login} />*/}
              <Route path="/login" component= {Login} />
              <Route path="/register" component= {Register} />
              <Route path="/profile">
                  <Protected component= {Profile} />
              </Route>
              <Route path="/myfiles">
                  <Protected component= {MyFiles} />
              </Route>
              <Route path="/allfiles">
                  <Protected component= {AllFiles} />
              </Route>
              <Route path="/addfile">
                  <Protected component= {AddFile} />
              </Route>
          </Switch>
      </div>
  );
}

export default App;
