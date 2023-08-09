import "./App.css";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import React from "react";

import { BrowserRouter as Router, Switch, Route , Link} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const togglemode = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "rgba(36 55 130 / 79%)";
      showAlert("Blue mode has been enabled", "success");
    }
  };

  const togglemode2 = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "red";
      showAlert("Red mode has been enabled", "success");
    }
  };
  const togglemode3 = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "success");
    }
  };
  return (
    <>
    
    <Router>
     
     <Navbar
        heading="TextUtiles"
        about="About"
        mode={mode}
        togglemode={togglemode}
        togglemode2={togglemode2}
        togglemode3={togglemode3}
        />
          <Alert alert={alert} />
        <Switch>
         
        <Route path="/about">
            <About />
          </Route>
          
          <Route path="/">
            <div className="container">
              <Textarea
                heading1="Enter Your Utiles to Analize "
                mode={mode}
                showAlert={showAlert}
                heading2="Write Your Utiles Below "
                />
            </div>

          </Route>

        </Switch>
       
      </Router>
      
    </>
  );
}

export default App;
