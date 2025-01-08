import { useState } from 'react';
import SkillTest from './SkillTest';
import QuickStatistics from './QuickStatistics';
import ComparisonGraph from './ComparisonGraph';
import SyllabusWiseAnalysis from './SyllabusWiseAnalysis';
import QuestionAnalysis from './QuestionAnalysis';
import UpdateScoresModal from './UpdateScoresModal';

function Dashboard() {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [stats, setStats] = useState({
    rank: 1,
    percentile: 30,
    correctAnswers: 10,
    totalQuestions: 15,
  });

  const [syllabusData, setSyllabusData] = useState([
    { name: 'HTML Tools, Forms, History', score: 80 },
    { name: 'Tags & References in HTML', score: 60 },
    { name: 'Tables & References in HTML', score: 24 },
    { name: 'Tables & CSS Basics', score: 96 },
  ]);

  const handleUpdate = (updatedData) => {
    setStats({
      ...stats,
      rank: parseInt(updatedData.rank),
      percentile: parseInt(updatedData.percentile),
      correctAnswers: parseInt(updatedData.correctAnswers),
    });
    setShowUpdateModal(false);
  };

  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">WhatBytes</h1>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span className="text-gray-600">Jawwad</span>
            <img
              src="/api/placeholder/32/32"
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
            />
          </div>
        </div>

        {/* Skill Test Section */}
        <SkillTest onUpdateClick={() => setShowUpdateModal(true)} />

        {/* Statistics and Syllabus Analysis */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <QuickStatistics stats={stats} />
          <div className="lg:col-span-2">
            <SyllabusWiseAnalysis data={syllabusData} />
          </div>
        </div>

        {/* Graphs Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <ComparisonGraph percentile={stats.percentile} />
          <QuestionAnalysis
            correct={stats.correctAnswers}
            total={stats.totalQuestions}
          />
        </div>

        {/* Update Scores Modal */}
        {showUpdateModal && (
          <UpdateScoresModal
            initialStats={stats}
            onClose={() => setShowUpdateModal(false)}
            onUpdate={handleUpdate}
          />
        )}
      </div>
    </div>
  );
}

export default Dashboard;
