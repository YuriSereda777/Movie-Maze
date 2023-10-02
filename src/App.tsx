import { Route, Routes } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Movies from "./pages/Movies";
import TVSeries from "./pages/TVSeries";
import Details from "./pages/Details";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/movies/:type" element={<Movies />} />
          <Route path="/tv/:type" element={<TVSeries />} />
          <Route path="/:category/:id" element={<Details />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
