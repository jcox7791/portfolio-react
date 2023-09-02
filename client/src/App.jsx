import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
// import About from './pages/about'
import Home from './pages/home';
// import Portfolio from './pages/portfolio';


function App() {

  return (
    <>
      {/* displaying of pages and routes for navigation call */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          {/* <Route path="/about" element={<About />}>
          </Route>
          <Route path="/portfolio" element={<Portfolio />}>
          </Route> */}
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
