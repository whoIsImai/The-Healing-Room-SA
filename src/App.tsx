import Home from './pages/home'
import Support from './pages/Support'
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
