import axios from 'axios';

const API_URL = 'http://localhost:8080';

// Получение списка активных трансляций
export const getActiveStreams = async () => {
    const response = await axios.get(`${API_URL}/getActiveStreams`);
    return response.data.activeStreams;
};

// Создание комнаты
export const createRoom = async (username) => {
    const response = await axios.post(`${API_URL}/createRoom`, { username });
    return response.data.room;
};

// Присоединение к комнате
export const joinRoom = async (roomName, identity) => {
    const response = await axios.post(`${API_URL}/joinRoom`, { roomName, identity });
    return response.data.token;
};

// Выбор собеседника в комнате
export const selectSpeaker = async (roomName, participantIdentity) => {
    const response = await axios.post(`${API_URL}/selectSpeaker`, { roomName, participantIdentity });
    return response.data.status;
};

// Получение списка наблюдателей
export const getObservers = async (roomName) => {
    const response = await axios.get(`${API_URL}/getObservers`, { params: { roomName } });
    return response.data.observers;
};