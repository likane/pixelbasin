import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import store from './store';
// Styles
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
// Components
import NavBar from './components/forms/NavBar';
import Alert from './components/global/Alert';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <>
      <NavBar />
        <Alert />
        <Routes>  
          <Route exact path='/' element={<Dashboard/>} />   
        </Routes>
      </>
    </Router>
  </Provider>
  );
}

export default App;
