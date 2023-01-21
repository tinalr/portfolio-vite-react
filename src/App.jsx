import { Outlet, Link } from 'react-router-dom';
import Navigation from './components/Navigation';
import './App.css'

function App() {

  return (
    <><h1 className='text-3xl font-bold underline'>Home Page</h1>
      <Navigation/>
    </>
    
  );
};

export default App
