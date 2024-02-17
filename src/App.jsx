import About from './components/About/About'
import Home from './components/Home/Home'
import { HashRouter, Routes, Route } from "react-router-dom";
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';


function App() {

  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/education' element={<Education />} />
          <Route path='/work' element={<Work />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
