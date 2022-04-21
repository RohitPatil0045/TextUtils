import "./App.css";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import React, { useState } from "react";
import Alert from "./component/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const changeMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#202124";
      showAlert("Dark Mode is ON", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is ON", "success");
    }
  };


  const showAlert = (massage, type) => {
    setAlert({
      massage: massage,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };


  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggle={changeMode} />
      <Alert alert={alert} />
      <TextForm mode={mode} showAlert={showAlert} />
    </>
  );
}

export default App;
