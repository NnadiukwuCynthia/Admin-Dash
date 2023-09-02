import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const CuExp = () => {
    const options = {

    }
    const data = {
        datasets: [
            {
                data: [4, 5, 9, 2, 6, 3, 5],
                backgroundColor: [ '#bf2ae7', '#eb3fa2', '#fc7060','#5de1b5', '#f04836', '#eea21a', '#48a2e8']
            }
        ],
        labels: ['08-08-23', '09-08-23', '10-08-23', '11-08-23', '12-08-23', '13-08-23', '14-08-23'],
    }
   
  return (
    <>
      
      <div className="pieContainer">
        <Pie  options={options} data={data}>

        </Pie>
      <h3 className="PieHeading">Current Week Expenses</h3>
      </div>
    </>
  )
}

export default CuExp