import {Chart as ChartJs, BarElement, CategoryScale, LinearScale, Tooltip, Legend} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJs.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
)
const WeekInc = () => {
    const data = {
        labels : ['Assigned', 'Closed', 'In Progress', 'Open', 'pending'],
        datasets: [
            {
                data: [1,4,3,2,1],
                backgroundColor: ['#bf2ae7', '#eb3fa2', '#fc7060','#5de1b5', '#4d4646'],
                borderWidth: 1,
                label: ['Assigned'],
            }
        ]
    }
    const options = {}
  return (
    <div className='BarContainer'>
        <h2 className='incidentDetail'>Weekly Incidents</h2>
        <Bar data={data} options={options}></Bar>
    </div>
  )
}

export default WeekInc