import Home from './pages/Home'
import Support from './pages/Support'
import Stories from './pages/Story'
import NotFound from './pages/not-found'
import TermsAndConditions from './pages/Ts&Cs'
import Profile from './pages/Profile'
import YourStories from './pages/Your-Story'
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Stories" element={<Stories />} />
        <Route path="/Terms" element={<TermsAndConditions />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/your-Stories" element={<YourStories/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
