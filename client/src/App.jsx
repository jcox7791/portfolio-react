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
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
      </BrowserRouter>
      {/* Pages */}
      <Home />
    </>
  )
}

export default App
