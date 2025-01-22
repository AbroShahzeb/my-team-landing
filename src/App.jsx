import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Contact, Home } from "./pages";
import { Layout } from "./layout";
import { ScrollToTop } from "./generalComponents";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
