import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//VISTAS
import Error from './views/Error';
import Detalle from './views/Detalle';
import Home from './views/Home.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/detalle",
    element: <Detalle />,
    errorElement: <Error />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
