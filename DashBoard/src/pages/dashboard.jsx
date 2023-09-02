import CatExp from "../components/CatExp"
import CuExp from "../components/CuExp"
import Reg from "../components/Reg"
import WeekInc from "../components/WeekInc"
import PriorityInc from "../components/PriorityInc"
import TableData from './../components/TableData';

const Dashboard = () => {
  return (
    <>
    <main className="DashBoard">
      <section className="SecOne">
        <div className="PieTable">
        <Reg/>
        <div className="PieDiv">
          <CuExp/>
          <CatExp/>
        </div>
        </div>
        <div className ='TableDiv'>
          <TableData/>
        </div>
      </section>
      <section className="SecTwo">
        <WeekInc/>
        <PriorityInc/>
      </section>
    </main>
    </>
  )
}

export default Dashboard