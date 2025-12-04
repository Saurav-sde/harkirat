import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({port:8080});


// event handler, whenever any request came on webSocket , send it here
wss.on("connection", function(socket) {
    console.log("user connected");
    setInterval(() => {
        socket.send("Current Price of Solana is " + Math.random()); // this is how ws server sends the msg to the client  
    }, 500)

    // how client can send the messages to the ws server
    socket.on("message", (e) => {
        console.log(e.toString());
    })
})
