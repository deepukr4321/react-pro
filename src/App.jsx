import React from 'react';
import './App.css'
import ReactDOM from 'react-dom';
import ReactDOMClient from 'react-dom/client';
import Body from './Component/Body';
import Header from './Component/Header';
import About from './Component/About';
import Error from './Component/Error';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

function App()  {

  return (
    <>
    <Header/>
    <Body/>   

</>
  )
}
const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    errorElement:<Error/>,
    },
    {
       path:"/about",     
       element:<About/>,
    },
]);

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter}/>)
export default App;
