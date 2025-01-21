import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import { Layout } from "./layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
