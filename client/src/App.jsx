import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Componets
import FooterBar from './componets/footer';
import NavBar from './componets/nav';
// Pages
import About from './pages/about';
import Home from './pages/home';
import Portfolio from './pages/portfolio';


function App() {

  return (
    <>
      <NavBar />
      {/* displaying of pages and routes for navigation calls */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/portfolio" element={<Portfolio />}>
          </Route>
        </Routes>
      </BrowserRouter>
      <FooterBar />
    </>
  )
}

export default App
