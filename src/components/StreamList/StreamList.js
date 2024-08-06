import React from 'react';
import StreamView from './StreamView';

const StreamList = ({ activeStreams }) => {
    return (
        <div className="stream-list">
            <h2>Stream List</h2>
            {activeStreams.map((stream, index) => (
                <StreamView key={index} region={stream.Region} count={stream.Count} />
            ))}
        </div>
    );
};

export default StreamList;