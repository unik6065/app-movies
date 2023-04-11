import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/home/Home';
import Movie from "./pages/movie/Movie";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
