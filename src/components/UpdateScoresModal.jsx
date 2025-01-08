import { useState } from 'react';

function UpdateScoresModal({ initialStats, onClose, onUpdate }) {
  const [formData, setFormData] = useState({
    rank: initialStats.rank,
    percentile: initialStats.percentile,
    correctAnswers: initialStats.correctAnswers,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 transition-opacity duration-300">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg transform transition-transform duration-300 scale-100">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Update Scores</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Rank */}
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                1
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1" htmlFor="rank">
                  Update your Rank
                </label>
                <input
                  id="rank"
                  type="number"
                  value={formData.rank}
                  onChange={(e) =>
                    setFormData({ ...formData, rank: e.target.value })
                  }
                  className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="1"
                  required
                />
              </div>
            </div>

            {/* Percentile */}
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                2
              </div>
              <div className="flex-1">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="percentile"
                >
                  Update your Percentile
                </label>
                <input
                  id="percentile"
                  type="number"
                  value={formData.percentile}
                  onChange={(e) =>
                    setFormData({ ...formData, percentile: e.target.value })
                  }
                  className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="0"
                  max="100"
                  required
                />
              </div>
            </div>

            {/* Correct Answers */}
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                3
              </div>
              <div className="flex-1">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="correctAnswers"
                >
                  Update your Current Score (out of 15)
                </label>
                <input
                  id="correctAnswers"
                  type="number"
                  value={formData.correctAnswers}
                  onChange={(e) =>
                    setFormData({ ...formData, correctAnswers: e.target.value })
                  }
                  className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="0"
                  max="15"
                  required
                />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 border rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Save <span className="ml-1">→</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateScoresModal;
