function QuickStatistics({ stats }) {
  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow">
      <h3 className="text-lg font-bold mb-4">Quick Statistics</h3>
      <div className="grid grid-cols-3 gap-4">
        {/* Rank */}
        <div className="text-center">
          <div className="text-3xl mb-1">🏆</div>
          <div className="text-2xl font-bold">{stats.rank}</div>
          <div className="text-xs text-gray-600">YOUR RANK</div>
        </div>
        {/* Percentile */}
        <div className="text-center">
          <div className="text-3xl mb-1">📊</div>
          <div className="text-2xl font-bold">{stats.percentile}%</div>
          <div className="text-xs text-gray-600">PERCENTILE</div>
        </div>
        {/* Correct Answers */}
        <div className="text-center">
          <div className="text-3xl mb-1">✅</div>
          <div className="text-2xl font-bold">
            {stats.correctAnswers}/{stats.totalQuestions}
          </div>
          <div className="text-xs text-gray-600">CORRECT ANSWERS</div>
        </div>
      </div>
    </div>
  );
}

export default QuickStatistics;
