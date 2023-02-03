
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Layout from "../pages/layout/layout";
import Dashboard from "../pages/layout/dashboard/dashboard";
import NoPage from "../pages/noPage/noPage";
import Login from "../pages/login/login";

function RoutesContainer() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<NoPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesContainer;

