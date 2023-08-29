import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// componets

// Pages
import Home from './pages/index';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Pages and routes for navigation */}
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
      </BrowserRouter>
  
    </>
  )
}

export default App
