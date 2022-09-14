import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip);

const PieChart = ({ dado1, dado2, dado3, dado4 }) => {
    const data = {
        labels: ['Curso de prevenção ao suicídio', 'A Covid 19 e seus sintomas', 'Pai presente: Cuidado e Compromisso', 'Outros'],
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
        <Pie data={data}/>
    )
}

export default PieChart