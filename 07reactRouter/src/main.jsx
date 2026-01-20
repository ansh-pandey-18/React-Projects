import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom' //Import these 4 things for creating routes
import Layout from './Layout.jsx'
import Home from './components/Home/home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/ContactUs/ContactUs.jsx'
import User from './components/User/User.jsx'
import GitHub,{githubInfoLoader} from './components/GitHub/GitHub.jsx'

//Creating all Routes
const router=createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>                   //Fixed layout component that will be present on all pages
    <Route path="" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />}/>
    <Route path="user/" element={<User />}>       //Variables written after : will be pushed to useParams()
      <Route path=":userId" element={<User />} />
    </Route>
    <Route
    loader={githubInfoLoader}                     //Loader function to fetch data before rendering the component  
    path="github" 
    element={<GitHub />} />
    <Route path="*" element={<div>404 Not Found</div>} />       //For any undefined route
  </Route>
))

//Rendering routes
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
