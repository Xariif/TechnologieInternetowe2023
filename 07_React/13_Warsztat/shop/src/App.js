import { BrowserRouter, createBrowserRouter, Outlet, Route, RouterProvider, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Product from "./pages/Product";
import Summary from "./pages/Summary";
import {Container} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./components/Layout";


function App() {
  return (
       <BrowserRouter>
          <Routes>
          <Route path="/" element={<Layout content={<Outlet />} />}>
           <Route path="/" element={<Home />} />
            <Route path="/summary" element={<Summary />} />
            <Route  path="/product/:id" element={<Product />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />

          </Routes>
       </BrowserRouter>
  );
}

export default App;
