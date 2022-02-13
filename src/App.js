
import './App.css';

import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Landing from './pages/Landing';

import Gallery from './pages/Gallery';
import RoadMap from './pages/RoadMap';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>} />

        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/road-map' element={<RoadMap/>} />
      </Routes>
  </Router>
  );
}

export default App;
