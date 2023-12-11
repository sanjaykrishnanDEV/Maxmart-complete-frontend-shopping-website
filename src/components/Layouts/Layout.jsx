import Header from "../Header";
import Routers from "../../routers/Routers";
import Footer from "../Footer";
import { useLocation } from "react-router-dom";
import AdminNav from "../../admin/AdminNav";
const Layout = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname.startsWith("/dashboard") ? <AdminNav /> : <Header />}

      <div>
        <Routers />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
