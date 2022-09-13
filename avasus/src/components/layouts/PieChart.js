import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ dado1, dado2, dado3, dado4 }) => {
    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [dado1, dado2, dado3, dado4],
                backgroundColor: [
                    '#FFFFFF',
                    '#F6303F',
                    '#707070',
                    '#2F2E41',
                ]
            },
        ],
    };

    return (
        <Pie data={data} />
    )
}

export default PieChart