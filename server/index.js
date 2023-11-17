const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes')
const messageRoute = require('./routes/messagesRoute')
const socket = require('socket.io')

const app = express();

require("dotenv").config()

app.use(cors());
app.use(express.json())

app.use(express.static('build'))
app.use('/api/auth', userRoutes)
app.use('/api/messages', messageRoute)

mongoose.connect(process.env.MONGO_URI, {
    dbName: 'iMessenger'
}).then(()=> {
    console.log('Database connected')
}).catch((err)=> {
    console.log(err.message)
})

const server = app.listen(process.env.PORT, ()=> {
    console.log(`Server Started on Port ${process.env.PORT}`)
})

const io = socket(server, {
    cors: {
        origin: 'https://himessenger.netlify.app/',
        credentials: true,
    }
})

global.onlineUsers = new Map();

io.on('connection', (socket) => {
    global.chatSocket = socket;
    socket.on('add-user', (userId)=> {
        onlineUsers.set(userId, socket.id);
    });

    socket.on('send-msg', (data)=> {
        const sendUserSocket = onlineUsers.get(data.to)
        if(sendUserSocket) {
            socket.to(sendUserSocket).emit('msg-recieve', data.msg)
        }
    })
})