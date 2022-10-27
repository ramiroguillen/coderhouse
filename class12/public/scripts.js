const socket = io.connect();

function renderChat(data) {
    const html = data.map((e, i) => {
        return (` 
            <div id=${i} class="d-flex" style="height:20px">
                <b class="me-1">${e.user}:</b>
                <p>${e.message}</p>
                <i class="ms-1">${e.date}</i>
            </div>`
        );
    }).join(" ");
    document.getElementById("chat").innerHTML = html;
    return;
}

function addMessage(e) {
    e.preventDefault();
    const text = document.getElementById("message").value;
    const date = new Date().getHours() + ":" + new Date().getMinutes();
    socket.emit("message", message = { user: socket.id, date, message: text });
    return;
}

function renderProducts(data) {
    const html = data.map((e, i) => {
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
    document.getElementById("products-table-body").innerHTML = html;
    return;
}

function addProduct(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const thumbnail = document.getElementById("thumbnail").value;
    socket.emit("new-product", product = { name, price, thumbnail });
    return;
}

socket.on("log", () => {
    let date = new Date();
    let user = { user: socket.id, loggedAt: date };
    socket.emit("logged", user);
});

socket.on("chat", (chat) => renderChat(chat));

socket.on("products", (items) => renderProducts(items));