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
        labels : ['High', 'Low', 'Medium'],
        datasets: [
            {
                data: [1,4,2],
                backgroundColor: ['#d94a3a','#1eda3a', '#1c714f'],
                borderWidth: 1,
                label: ['Low'],
            }
        ]
    }
    const options = {}
  return (
    <>
    <div className='BarContainer'>
    <h2 className='incidentDetail'>Priority Incidents</h2>
        <Bar data={data} options={options}></Bar>
    </div>
    </>
  )
}

export default WeekInc