import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";

import ManageBooks from "./pages/ManageBooks";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/manage-books"
          element={<ManageBooks />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;