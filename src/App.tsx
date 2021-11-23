import { StyledEngineProvider } from '@mui/material';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AddressBook from './components/address/address-list';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <StyledEngineProvider injectFirst>
            <AddressBook></AddressBook>
          </StyledEngineProvider>
        </div>
      </Router>
    </>
  );
}

export default App;
