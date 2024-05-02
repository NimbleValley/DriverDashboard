// Socket to force window to keep up to date
var socket = io();

var tab = "tele";

// Socket listeners
socket.on('update', handleUpdate);

// Shared elements
const connectStatusContainer = document.getElementById("connect-status-container");

var conditionalElements = {
    matchTimeText: document.getElementById("game-time-text")
}

// Update handler
function handleUpdate(args) {
    args.connected ? connected() : disconected();

    if (tab == "tele") {
        let matchTime = Math.round(args.matchTime - 0.675);

        conditionalElements.matchTimeText.innerText = `${args.matchTime <= -1 ? "..." : Math.round(args.matchTime - 0.675)}`;
        if (matchTime >= -1) {
            if (matchTime <= 30) {
                conditionalElements.matchTimeText.style.backgroundColor = "red";
            } else if (matchTime <= 45) {
                conditionalElements.matchTimeText.style.backgroundColor = "rgb(255, 115, 0)";
            } else if (matchTime <= 75) {
                conditionalElements.matchTimeText.style.backgroundColor = "yellow";
            } else {
                conditionalElements.matchTimeText.style.backgroundColor = "lime";
            }
        }

    } else {

    }
}

function disconected() {
    connectStatusContainer.innerText = "Not connected to robot!";
    connectStatusContainer.style.backgroundColor = "rgb(179, 41, 23)";
}

function connected() {
    connectStatusContainer.innerText = "Connected to robot.";
    connectStatusContainer.style.backgroundColor = "rgb(23, 179, 36)";
}