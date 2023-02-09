
import './App.css';
import { Route} from 'react-router-dom';
import Home from './Home';
import Login from './Login';

function App() {
  return (
    <div className="App">
        <Home/>
     <Route path="/login" element={<Login/>}/>  
    </div>
  );
}

export default App;
