import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/home/Header";
import Home from "./components/home/Home";
import Profile from "./components/profile/Profile";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />

        <CssBaseline />
        <Container maxWidth="xl">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
};

export default App;
