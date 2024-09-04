import './App.css';
import './Home';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Error from "./Error";

import Projects from './projects';
import Contact from './contact';
import About from './about';




function App() {
  return (
    <div className='appLayout'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}


const appRouter = createBrowserRouter([
  {path:'/', element : <App/>,
  children:[
      {path:'/', element:<Home/>},
      {path:'about', element:<About/>},
      {path:'contact', element:<Contact/>},
      {path: 'project', element:<Projects/>}
  ], errorElement : <Error/>},


])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)

export default App;
