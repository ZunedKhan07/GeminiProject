import React, { useState } from 'react';
import { fetchOSSuggestions } from './api/axios';
import SearchBar from './components/searchBar';
import ResultCard from './components/ResultCard';

function App() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (interest) => {
    if (!interest) return alert("Bhai, kuch toh likho!");
    
    setLoading(true);
    setData("");
    try {
      const result = await fetchOSSuggestions(interest);
      setData(result.data); 
    } catch (err) {
      alert("Error: Backend se connection fail!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl font-extrabold text-blue-500 mb-8">OS Explorer 🚀</h1>
      
      {/* Component use kar rahe hain */}
      <SearchBar onSearch={handleSearch} loading={loading} />
      
      {loading && <p className="text-blue-400 animate-pulse mb-4">Gemini is finding repos... 🧠</p>}
      
      <ResultCard data={data} />
    </div>
  );
}

export default App;