import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#3b5172";
      showAlert("Dark mode is Activated", "success");
      document.title = "Textutils-DarkMode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is Activated", "success");
      document.title = "Textutils-LightMode";
    }
  };

  return (
    
      <>
        <Navbar title="Deepak" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
         
          <Textform heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />
        </div>
      </>
  
  );
}

export default App;
