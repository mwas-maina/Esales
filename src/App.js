import React from 'react';
import './App.css';
import NavigationBar from './components/header/navigation/navigation.component';
import { Switch, Route } from 'react-router-dom';
import SignUp from './components/signup/signup.component';


function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Switch>
        <Route path="/signUp" component={SignUp} />
      </Switch>
         
    </div>
  );
}

export default App;
