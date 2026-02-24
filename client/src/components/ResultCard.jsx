import React from 'react';
import ReactMarkdown from "react-markdown";

const ResultCard = ({ data }) => {
    if (!data) return null;

  return (
    <div className="w-full max-w-3xl text-mist-50 bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700 prose prose-invert">
      <ReactMarkdown>
        {data}
      </ReactMarkdown>
    </div>
  )
}

export default ResultCard
