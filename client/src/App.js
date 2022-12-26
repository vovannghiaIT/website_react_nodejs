import { Home, Login, HomePage } from "./containers/public";
import { Routes, Route } from "react-router-dom";
import { path } from "./ultils/constant";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Admin } from "./containers/Admin";

function App() {
  return (
    <div className="w-full font-sans">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path="*" element={<HomePage />} />
        </Route>
        <Route path={path.LOGIN} element={<Login />} />
        <Route path={path.ADMIN} element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
