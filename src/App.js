import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import About from './pages/About';
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
      <Route path='/' exact component={About} />
        <Route path='/about' exact component={About} />
        <Route path='/activities' exact component={Activities} />
        <Route path='/relationships' exact component={Relationships} />
        <Route path='/places' exact component={Places} />
        <Route path='/services' exact component={Services} />
        <Route path='/services/directories' exact component={Directories} />
        <Route path='/services/allowNotifications' exact component={AllowNotifications} />
      </Routes>
    </Router>
  );
}

export default App;