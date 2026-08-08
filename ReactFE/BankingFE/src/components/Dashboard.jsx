import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import Accounts from "./Accounts";
import "./Dashboard.css";

function Dashboard() {

  const theme = useContext(ThemeContext);

  return (

    <div className={`dashboard ${theme}`}>

      <h1>🏦 Banking Dashboard</h1>

      <Accounts />

    </div>

  );

}

export default Dashboard;