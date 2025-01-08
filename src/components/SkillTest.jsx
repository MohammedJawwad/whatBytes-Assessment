function SkillTest({ onUpdateClick }) {
  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow">
      <div className="flex flex-col md:flex-row items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <img
            src="/api/placeholder/40/40"
            alt="HTML5 Logo"
            className="w-10 h-10 object-contain"
          />
          <div>
            <h2 className="text-xl font-bold">Hyper Text Markup Language</h2>
            <p className="text-gray-600 text-sm">
              Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
            </p>
          </div>
        </div>
        <button
          onClick={onUpdateClick}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Update
        </button>
      </div>
    </div>
  );
}

export default SkillTest;
