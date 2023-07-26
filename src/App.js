import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import WeeklyView from "./components/WeeklyView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} exact={true} />
        <Route path="/week-view" Component={WeeklyView} exact={true} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
