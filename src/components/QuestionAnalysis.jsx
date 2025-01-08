import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function QuestionAnalysis({ correct, total }) {
  const incorrect = total - correct;

  const data = {
    labels: ['Correct', 'Incorrect'],
    datasets: [
      {
        data: [correct, incorrect],
        backgroundColor: ['#4CAF50', '#FF4444'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '75%',
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow">
      <h3 className="text-lg font-bold mb-2">Question Analysis</h3>
      <p className="text-gray-600 mb-4">
        You scored {correct} question{correct !== 1 && 's'} correct out of {total}.
        {correct < total && ' However, it still needs some improvements.'}
      </p>
      <div className="h-64 md:h-80 flex items-center justify-center">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}

export default QuestionAnalysis;
