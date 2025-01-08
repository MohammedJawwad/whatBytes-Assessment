function SyllabusWiseAnalysis({ data }) {
  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow">
      <h3 className="text-lg font-bold mb-4">Syllabus Wise Analysis</h3>
      <div className="space-y-4">
        {data.map((topic, index) => (
          <div key={index} className="space-y-2">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm">
              <span className="text-gray-600">{topic.name}</span>
              <span className="font-medium mt-1 sm:mt-0">{topic.score}%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${
                  topic.score >= 80
                    ? 'bg-green-500'
                    : topic.score >= 60
                    ? 'bg-blue-500'
                    : topic.score >= 40
                    ? 'bg-orange-500'
                    : 'bg-red-500'
                }`}
                style={{ width: `${topic.score}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SyllabusWiseAnalysis;
