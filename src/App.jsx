import { Outlet, Link } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <>Home Page
      <nav>
        <Link to={`/portfolio`}>portfolio</Link>
    </nav>
    </>
    
  );
};

export default App
