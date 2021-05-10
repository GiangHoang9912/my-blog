import "./home.css";
import Header from "../common/header/header";
import Footer from "../common/footer/footer";
import { Helmet } from "react-helmet";

function HomePage() {
  return (
    <div className="page-home">
      <Helmet>
        <title>Giang Hoàng - Home</title>
      </Helmet>

      <Header />
      <div className="home">
        {/* 
          write content in here
        */}
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
