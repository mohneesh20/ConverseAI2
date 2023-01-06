import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const user=JSON.parse(localStorage.getItem("user"));
  if(!user){
    console.log(user);
  }
  return (
    <Routes>
      <Route
      exact path="/"
      element={<Login/>}
      />
      <Route
      exact path="/register"
      element={<Register/>}
      />
      <Route
      exact path="/home"
      element={<Home/>}
      />
      </Routes>
  );
}

export default App;