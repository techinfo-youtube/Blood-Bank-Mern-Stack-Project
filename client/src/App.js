import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
