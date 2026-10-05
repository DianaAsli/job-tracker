import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Applications from "./pages/Applications";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/applications" element={<Applications/>}/>
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
};
export default App;