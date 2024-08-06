import React from 'react';

const MapView = ({ activeStreams }) => {
    return (
        <div className="map-view">
            <h2>Map View</h2>
            <ul>
                {activeStreams.map((stream, index) => (
                    <li key={index}>
                        {stream.Region}: {stream.Count} active streams
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MapView;