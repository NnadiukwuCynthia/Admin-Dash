import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const CatExp = () => {
    const options = {

    }
    const data = {
        datasets: [
            {
                data: [4, 5, 9, 5],
                backgroundColor: [ '#eb3fa2', '#f04836', '#7f8aae', '#48a2e8']
            }
        ],
        labels: [ 'Maintenance Work', 'Other Purchases', 'Asset Purchase', 'Other Expenses'],
    }
   
  return (
    <>
     <div className="pieContainer">
        <Pie  options={options} data={data}>

        </Pie>
      <h3 className="PieHeading">Expenses By Category</h3>
      </div>
    </>
  )
}

export default CatExp