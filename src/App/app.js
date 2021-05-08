import "./app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../home/home";
import Contact from "../contact/contact";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}
