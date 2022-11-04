import BarChar from "../../components/administrador/BarChar";
import Layout from "../../components/administrador/Layout";
import AreaChar from "../../components/administrador/AreaChar";
import MultiaxisChar from "../../components/administrador/MultiaxisChar";
import RatedProductos from "../../components/administrador/RatedProductos";

function Home() {
  return (
    <Layout>
      <div className="w-full h-auto min-h-screen  overscroll-scroll pt-3">
        <div className="grid grid-cols-1 h-48 bg-slate-600 dark:bg-gray-900 rounded p-5">
          <div className="rounded bg-slate-50">
            <MultiaxisChar />
          </div>
        </div>
        <div className="grid grid-cols-1  grid-rows-3 md:grid-cols-3 md:grid-rows-1 place-content-center ali w-full h-48 max-h-52 bg-slate-500 border-t-amber-800 dark:bg-gray-900 mt-5 p-5 gap-2 rounded">
          <div className="rounded  p-1 bg-slate-50">
            <BarChar />
          </div>
          <div className=" rounded p-1 bg-slate-50">
            <AreaChar />
          </div>
          <div className="rounded w-full h-full bg-slate-50 ">
            <RatedProductos/>
          </div>
        </div>
        <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 bg-slate-300 mt-5 rounded p-5 gap-4">
          <div className="bg-slate-50 h-60 rounded">
            
          </div>
          <div className="bg-slate-50 h-60 rounded">2</div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
