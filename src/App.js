import Home from "../src/component/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "../src/component/Create";
import Update from "../src/component/Update";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
