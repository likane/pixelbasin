import React, { useEffect } from 'react';
import Dashboard from './components/dashboard/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import store from './store';
// Styles
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <>
        <Routes>  
          <Route exact path='/' element={<Dashboard/>} />   
        </Routes>
      </>
    </Router>
  </Provider>
  );
}

export default App;
