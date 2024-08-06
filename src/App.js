import React, { useState, useEffect } from 'react';
import { getActiveStreams } from './api';
import MapView from './components/MapView/MapView';
import StreamList from './components/StreamList/StreamList';
import './App.css';

function App() {
  const [activeStreams, setActiveStreams] = useState([]);

  useEffect(() => {
    const fetchActiveStreams = async () => {
      const streams = await getActiveStreams();
      setActiveStreams(streams);
    };
    fetchActiveStreams();
  }, []);

  return (
      <div className="App">
        <h1>LiveKit Streaming</h1>
        <MapView activeStreams={activeStreams} />
        <StreamList activeStreams={activeStreams} />
      </div>
  );
}

export default App;