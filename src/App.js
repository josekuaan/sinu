
import './App.css';

import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Landing from './pages/Landing';

import Gallery from './pages/Gallery';
import RoadMap from './pages/RoadMap';
import Token from './components/Token';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Landing/>} />
        <Route exact path='/gallery' element={<Gallery/>} />
        <Route exact path='/roadmap' element={<RoadMap/>} />
        <Route exact path='/tokenomics' element={<Token/>} />
      </Routes>
  </Router>
  );
}

export default App;
