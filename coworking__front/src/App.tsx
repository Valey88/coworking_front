import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./page/Home";
import AddRooms from "./page/AddRooms";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddRooms" element={<AddRooms />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
