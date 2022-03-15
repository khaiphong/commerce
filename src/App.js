import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import Activities from './pages/Activities';
import Relationships from './pages/Relationships';
import Places from './pages/Places';
import Services from './pages/Services';
import Directories from './pages/services/Directories';
import AllowNotifications from './pages/services/AllowNotifications';

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/activities' element={<Activities />} />
        <Route path='/relationships' element={<Relationships />} />
        <Route path='/places' element={<Places />} />
        <Route path='/services' element={<Services />} />
        <Route path='/services/directories' element={<Directories />} />
        <Route path='/services/allowNotifications' element={<AllowNotifications />} />
      </Routes>
    </Router>
  );
}

export default App;