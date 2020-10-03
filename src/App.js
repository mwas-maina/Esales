import React from 'react';
import './App.css';
import NavigationBar from './components/header/navigation/navigation.component';
import { Switch, Route } from 'react-router-dom';
import SignUp from './components/signup/signup.component';
import SignIn from './components/signin/signin.component';
import HeaderDisplay from './layouts/header-display/header-display.layout';


function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Switch>
        <Route path="/signup" component={SignUp}/>
        <Route path="/signin" component={SignIn}/>
        <Route path="/" component={HeaderDisplay}/>
      </Switch>
         
    </div>
  );
}

export default App;
