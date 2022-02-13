
import './App.css';

import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Landing from './pages/Landing';
import RoadMap from './pages/RoadMap';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/road-map' element={<RoadMap/>} />
      </Routes>
  </Router>
  );
}

export default App;
