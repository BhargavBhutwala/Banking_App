import Dashboard from "./components/Dashboard";
import { ThemeContext } from "./components/ThemeContext";

function App() {

  return (

    <ThemeContext.Provider value="light">

      <Dashboard />

    </ThemeContext.Provider>

  );

}

export default App;