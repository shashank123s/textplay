import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      {/* <Router>
    <Switch>
      {/* <Route exact path="/about">
          </Route>
          <Route exact path="/">
          </Route>
    </Switch> */}
      {/* </Router> */} 
        <Navbar title="TextPlayer" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Try TextPlayer - word counter, character counter, remove extra spaces" mode={mode} />
        {/* <About mode={mode} /> */}
      </div>
    </>
  );
}

export default App;