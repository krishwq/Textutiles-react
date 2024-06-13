import "./App.css";
import Alart from "./components/Alart";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Text from "./components/Text";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState("dark");
  const [alart, setAlart] = useState(null);
  const [btnBg, setbtnBg] = useState(null);
  const showalart = (massage, type) => {
    setAlart({
      msg: massage,
      types: type,
    });
    setTimeout(() => {
      setAlart(null);
    }, 2000);
  };
  const removeclass=()=>{
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-info');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-primary');
  }
  const tooglemode = (cls) => {
    removeclass();
    document.body.classList.add('bg-'+cls);
    setbtnBg(cls)
    if(cls===null){
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showalart("Lightmode enabled successfully", "success");
     
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(1 3 55)";
      showalart("Darkmode enabled successfully", "success");
    }
  }
  };

  return (
    <>
    {/* <Navbar title="About" mode={mode} toggleBtn={tooglemode} />
      <Alart alart={alart} />
      <div className="container"> <Text
          heading="Enter your text to analyse below"
          mode={mode}
          showalart={showalart}
          btn={btnBg}
        /></div> */}
    <Router>
      <Navbar title="About" mode={mode} toggleBtn={tooglemode} />
      <Alart alart={alart} />
      <div className="container">
      <Switch>
          <Route exact path="/About">
            <About/>
          </Route>
          <Route exact path="/">
          <Text
          heading="Enter your text to analyse below"
          mode={mode}
          showalart={showalart}
          btn={btnBg}
        />
          </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
