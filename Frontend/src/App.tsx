import './App.css'
import {Routes, Route } from 'react-router-dom';
import Chatbot from './Pages/Chatbot'
import Home from './Pages/Home'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/signup" element={<Chatbot />} />
        <Route path="/seek-official-assistance" element={<Chatbot />} />
      </Routes>
  )
}

export default App
