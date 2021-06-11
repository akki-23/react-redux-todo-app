import "./App.css";
import Dashboard from "./Dashboard";
import LoginPage from "./components/LoginPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Router>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Router>
    </div>
  );
}

export default App;
