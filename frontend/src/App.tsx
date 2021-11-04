import DataTable from "components/DataTable";
import Footer from "components/footer";
import NavBar from "components/navbar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Olá mundoo!</h1>
      </div>
      <DataTable />
      <Footer />
    </>
  );
}

export default App;
