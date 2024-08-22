import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import AddCoffee from './Componens/AddCoffee';
import UpdateCoffee from './Componens/UpdateCoffee';
import SignIn from './Componens/SignIn.jsx';
import singUp from './Componens/SingUp';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    loader: ()=>fetch('http://localhost:5000/coffee')
  },
  {
    path: "addCoffee",
    element:<AddCoffee></AddCoffee>,
  },
  {
    path: "updateCoffee/:id",
    element:<UpdateCoffee></UpdateCoffee>,
    loader: ({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  
  {
    path:'signin',
    element:<SignIn></SignIn>
  },
  {
    path : 'singup',
    element:<singUp></singUp>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
