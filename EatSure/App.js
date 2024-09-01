import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter,RouterProvider ,Outlet, useParams} from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestMenu from "./src/components/RestMenu";
const AppLayout = () => {
  
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter=createBrowserRouter(
  [
    {
      
      element: <AppLayout />,
      children:[
        {
          path: '/',
          element:<Body/>
        },
        {
          path: '/about',
          element: <About name="Shreya" place="kadma" />,
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path:'/resturants/:resId',
          element: <RestMenu />
        }
      ],
      errorElement:<Error/>,
    },
    
    
  ]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider  router={appRouter}/>);
