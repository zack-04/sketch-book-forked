const { io } = require("socket.io-client");
const URL = process.env.NODE_ENV === 'production' ? 'https://sketch-book-backend.onrender.com' : 'http://localhost:5001'
export const socket = io(URL);