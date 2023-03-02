import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Route/Routes';

function App() {
  return (
    <div className='max-w-[1200px] mx-auto'>
  
    <RouterProvider router={router} />

    </div>
  );
}

export default App;
