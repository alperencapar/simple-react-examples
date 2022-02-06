import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import HomePage from './pages/HomePage'
import BlogHomePage from './pages/BlogHomePage'
import BlogPage from './pages/BlogPage'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar  />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="blogs/" element={<BlogHomePage />} />
          <Route path="blogs/:id" element={<BlogPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
