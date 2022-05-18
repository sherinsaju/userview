import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Viewuser from './component/Viewuser';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <Viewuser/>
    </div>
  );
}

export default App;
