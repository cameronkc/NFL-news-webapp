import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Login from "./pages/Login";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import News from "./pages/News";
import NewsList from "./components/NewsList";
import ProtectedRoute from "./pages/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
  return (
    <UserAuthContextProvider>
      <Router>
        <Navbar />
        <main className="container flex justify-center mx-auto px-3 pb-12 ">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/news" element={<NewsList />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </UserAuthContextProvider>
  );
}

export default App;
