import React, { useState } from 'react';
import { joinRoom } from '../../api';

const StreamView = ({ region, count }) => {
    const [token, setToken] = useState(null);

    const handleJoinRoom = async () => {
        const roomName = `room_${region}`;
        const identity = `user_${Math.floor(Math.random() * 1000)}`;
        const token = await joinRoom(roomName, identity);
        setToken(token);
    };

    return (
        <div className="stream-view">
            <h3>{region}</h3>
            <p>{count} active streams</p>
            <button onClick={handleJoinRoom}>Join Room</button>
            {token && <p>Joined with token: {token}</p>}
        </div>
    );
};

export default StreamView;