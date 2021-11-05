import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/footer";
import NavBar from "components/navbar";

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de Vendas</h1>

        <div className="row">
          <div className='col-sm-6'>
            <h5 className='text-center text-secondary'>Sucesso das Visitas (%)</h5>
            <BarChart />
          </div>
          <div className='col-sm-6'>
            <h5 className='text-center text-secondary'>Total de vendas</h5>
            <DonutChart />
          </div>
        </div>

        <div className='pt-5 pb-3'>
          <h2 className='text-primary'>Total de Vendas</h2>
        </div>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
