import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function ComparisonGraph({ percentile }) {
  const data = {
    labels: ['0', '25', '50', '75', '100'],
    datasets: [
      {
        label: 'Percentile',
        data: [0, 25, 50, 75, 100].map((x) =>
          Math.exp(-Math.pow((x - percentile) / 20, 2)) * 100
        ),
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        tension: 0.4,
        pointRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows the chart to adjust its height
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20,
        },
      },
      x: {
        ticks: {
          font: {
            size: 14, // Increased font size for better readability
          },
        },
      },
    },
  };

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow">
      <h3 className="text-lg font-bold mb-4">Comparison Graph</h3>
      <p className="text-gray-600 mb-4">
        You scored {percentile}% percentile which is{' '}
        {percentile > 72 ? 'higher' : 'lower'} than the average percentile 72% of all
        the engineers who took this assessment.
      </p>
      <div className="h-64 md:h-80">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default ComparisonGraph;
