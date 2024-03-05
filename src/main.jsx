import ReactDOM from "react-dom/client";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainLayout from "./Layout/MainLayout";
import MainPage from "./Pages/MainPage";
import Contact from "./pages/Contact";
import Home from "./pages/Home"
import AboutUs from "./Pages/AboutUs";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/Home" element={<Home />} />

        <Route path="/Contact" element={<Contact />} />
        
      </Route>

    
    </>
  )
);

