const { io } = require("socket.io-client");
const URL = process.env.NODE_ENV === 'production' ? 'https://jscafe-sketchbook-server.onrender.com' : 'http://localhost:5001'
export const socket = io(URL);