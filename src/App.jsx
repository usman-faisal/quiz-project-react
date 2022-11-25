import Home from "./components/Home";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Quizes from "./components/Quizes";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quizes />} />
    </Routes>
  );
}
