import {Routes, Route } from 'react-router-dom';
import Chatbot from './Pages/Chatbot'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Lawyer from './Pages/lawyer';
import Psych from './Pages/psych';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/seek-legal-assistance" element={<Lawyer />} />
        <Route path="/seek-mental-assistance" element={<Psych />} />
      </Routes>
  )
}

export default App
