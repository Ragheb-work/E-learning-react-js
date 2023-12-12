import "./App.css";
import Categories from "./components/Categories";
import Faqs from "./components/Faqs";
import Home from "./components/Home";
import PopularCourses from "./components/PopularCourses";
import Testimonials from "./components/Testimonials";
import Layout from "./components/common/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Parcours from "./components/pages/Parcours";
import Cours from "./components/pages/Cours";
import Contact from "./components/pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
        <Categories />
        <PopularCourses />
        <Faqs />
        <Testimonials />
      </Layout>
    ),
  },
  {
    path: "/parcours",
    element: (
      <Layout>
        <Parcours />
      </Layout>
    ),
  },
  {
    path: "/cours",
    element: (
      <Layout>
        <Cours />
      </Layout>
    ),
  },
  {
    path: "/contact",
    element: (
      <Layout>
        <Contact />
      </Layout>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
