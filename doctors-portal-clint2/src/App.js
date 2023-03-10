import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Route/Routes';
import  { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='max-w-[1200px] mx-auto'>
  
    <RouterProvider router={router} />
    <Toaster></Toaster>

    </div>
  );
}

export default App;
