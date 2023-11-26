import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReadPage from "./pages/ReadPage";
import CreatePage from "./pages/CreatePage";
import UpdatePgge from "./pages/UpdatePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReadPage />} />
        <Route path="/register" element={<CreatePage />} />
        <Route path="/update/:id" element={<UpdatePgge />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;