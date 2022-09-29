import './App.css';
import Router from './Router/Router';
import Navbar from './Shared/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Router />
    </BrowserRouter>
  );
}

export default App;
