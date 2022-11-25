import Home from "./components/Home";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Quiz from "./components/Quiz";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
    </Routes>
  );
}
