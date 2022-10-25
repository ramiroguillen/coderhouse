const socket = io.connect(); // connection to server

function renderChat(data) { // recieve chat data
    const html = data.map((e, i) => { // generate html for each element
        return (` 
            <div id=${i} class="d-flex" style="height:20px">
                <b class="me-1">${e.user}:</b>
                <p>${e.message}</p>
                <i class="ms-1">${e.date}</i>
            </div>`
        );
    }).join(" ");
    document.getElementById("chat").innerHTML = html; // render chat
    return;
}

function addMessage(e) { // recieve new data from index.html
    const text = document.getElementById("message").value;
    const date = new Date().getHours() + ":" + new Date().getMinutes();
    socket.emit("message", message = { user: socket.id, date, message: text }); // send data to server
    return;
}

function renderProducts(data) {
    const html = data.map((e, i) => { // generate html for each element
        return (` 
            <tr id=${i}>
                <th scope="row" class="align-middle">${e.name}</th>
                <td class="align-middle">$ ${e.price}</td>
                <td>
                    <img 
                        src=${e.thumbnail}
                        alt=${e.name} 
                        class="rounded mx-auto d-block"
                        style="height:96px;width:96px"
                    >
                </td>
            </tr>`
        );
    }).join(" ");
    document.getElementById("products-table-body").innerHTML = html; // render list
    return;
}

function addProduct(e) { // recieve new data from index.html
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const thumbnail = document.getElementById("thumbnail").value;
    socket.emit("new-product", product = { name, price, thumbnail }); // send data to server
    return;
}

socket.on("log", () => { // listen for log requests
    let date = new Date();
    let user = { user: socket.id, loggedAt: date }; // generate log data
    socket.emit("logged", user); // send data to server
});

// listen for chat requests, when heard render chat data
socket.on("chat", (chat) => renderChat(chat));

socket.on("products", (items) => renderProducts(items));