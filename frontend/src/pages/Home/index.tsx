import Footer from "components/footer";
import NavBar from "components/navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="container mt-5">
        <div className="jumbotron">
          <h1 className="display-1">DSVendas</h1>
          <p className="lead">Analise o desempenho das suas vendas por diferentes perspectivas</p>
          <hr />
          <p className="text-muted">Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um back end construído com Spring Boot.</p>
        </div>
        <Link className='btn btn-primary btn-lg mt-3' to="/dashboard">
          Acessar dashborad
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default Home;
