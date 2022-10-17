const socket = io(); // connection to server

socket.on("log", () => { // listen for log requests
    let date = new Date();
    let user = { user: socket.id, loggedAt: date }; // generate log data
    socket.emit("logged", user); // send data to server
});

function renderChat(chat) { // recieve chat data
    const html = chat.map((e, i) => {
        return (`
            <div id=${i}>
                <strong>${e.user}</strong>
                <em>${e.date}</em>
                <em>${e.message}</em>
            <div>`
        );
    }).join(" "); // generate html for each element
    document.getElementById("messages").innerHTML = html; // render chat
}
// listen for chat requests, when heard render chat data
socket.on("chat", (chat) => renderChat(chat)); 

function addMessage(e) { // recieve new data from index.html
    const text = document.getElementById("message").value;
    const date = new Date();
    socket.emit("message", message = { user: socket.id, date, message: text}); // send data to server
}