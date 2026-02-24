import { useState } from 'react';

import React from 'react'

const searchBar = ({ onSearch, loading }) => {
    const [input, setInput] = useState("");

  return (
    <div className="flex gap-3 mb-10 w-full max-w-md">
        <input
        className="flex-1 p-3 rounded bg-gray-800 border border-gray-700 outline-none focus:border-blue-500 text-white"
        placeholder="e.g. MERN, Python..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
        <button
        onClick={() => onSearch(input)} // App.jsx ke function ko call karega
                disabled={loading}
                className="bg-blue-600 px-6 py-3 rounded font-bold hover:bg-blue-700 disabled:opacity-50 text-white transition-all"
                >
            {loading ? "Seaching..." : "Find"}
        </button>
    </div>
  )
}

export default searchBar
