import Header from "../Header";
import Routers from "../../routers/Routers";
import Footer from "../Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;
