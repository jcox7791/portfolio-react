import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import Home from './pages/index';

function App() {

  return (
    <>
    <h1>Hello World!</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
