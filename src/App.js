import React from 'react';
import './App.css';
import Header from './components/Header.js'
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled from 'styled-components'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase'
import Login from './components/Login'

function App() {
  const [user, loading] = useAuthState(auth);
  return (
    <div className="app">
     <Router>
      
        <>
        <Header />
        <AppBody>
          <Sidebar />
        <Switch>
          <Route path="/" exact>
              <Chat />
            </Route>
          </Switch>
        </AppBody>
         
        </>
       
      
    </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
    display: flex;
`;
