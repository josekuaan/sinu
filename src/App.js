
import './App.css';

import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Landing from './pages/Landing';

import Gallery from './pages/Gallery';
import RoadMap from './pages/RoadMap';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Landing/>} />

        <Route exact path='/gallery' element={<Gallery/>} />
        <Route exact path='/roadmap' element={<RoadMap/>} />
      </Routes>
  </Router>
  );
}

export default App;
