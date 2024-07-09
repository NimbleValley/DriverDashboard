// Socket to force window to keep up to date
var socket = io();

var tab = "tele";

// TODO CHANGE THIS FOR NEW AUTOS
var autoRoutines = ["Source 4-5", "Subwoofer 6-7-8", "Subwoofer 1-2-3", "Subwoofer 5-6"];

// Socket listeners
socket.on('update', handleUpdate);

// Shared elements
const connectStatusContainer = document.getElementById("connect-status-container");

var teleElements = {
    container: document.getElementById("tele-dashboard-container"),
    matchTimeText: document.getElementById("game-time-text"),
    intakeStateText: document.getElementById("intake-state-text")
}

var autoElements = {
    container: document.getElementById("auto-dashboard-container"),
    select: document.getElementById("auto-select"),
    blinkButton: document.getElementById("auto-blink-button"),
    autoRecieved: document.getElementById("auto-recieve-text")
}

var headerElements = {
    autoButton: document.getElementById("auto-button"),
    teleButton: document.getElementById("tele-button")
}

autoElements.select.addEventListener("change", switchAuto);

// Update handler
function handleUpdate(args) {
    args.connected ? connected() : disconected();

    
    if (tab == "tele") {
        
        // Match time
        let matchTime = Math.round(args.matchTime - 0.675);
        console.log(matchTime);
        teleElements.matchTimeText.innerText = `${args.matchTime <= -1 ? "..." : Math.round(args.matchTime - 0.675)}`;
        if (matchTime >= -1) {
            if (matchTime <= 30) {
                teleElements.matchTimeText.style.backgroundColor = "red";
            } else if (matchTime <= 45) {
                teleElements.matchTimeText.style.backgroundColor = "rgb(255, 115, 0)";
            } else if (matchTime <= 75) {
                teleElements.matchTimeText.style.backgroundColor = "yellow";
            } else {
                teleElements.matchTimeText.style.backgroundColor = "darkgreen";
            }
        }

        // Intake detection
        if (args.pieceDetected && matchTime >= -1) {
            let elems = document.body.getElementsByTagName("*");
            for (let i = 0; i < elems.length; i++) {
                elems[i].classList.add("green-alert");
            }
        } else {
            let elems = document.body.getElementsByTagName("*");
            for (let i = 0; i < elems.length; i++) {
                elems[i].classList.remove("green-alert");
            }
        }
        if (matchTime >= -1 && matchTime <= 30) {
            let elems = document.body.getElementsByTagName("*");
            for (let i = 0; i < elems.length; i++) {
                elems[i].classList.add("red-alert");
            }
        } else {
            let elems = document.body.getElementsByTagName("*");
            for (let i = 0; i < elems.length; i++) {
                elems[i].classList.remove("red-alert");
            }
        }
        teleElements.matchTimeText.classList = "";

        // Intake state
        if (args.intakeDeployed && matchTime >= -1) {
            teleElements.intakeStateText.innerText = "Intake\nDeloyed";
            teleElements.intakeStateText.className = "deployed-warning";
        } else {
            teleElements.intakeStateText.innerText = "Intake\nRetracted";
            teleElements.intakeStateText.className = "";
        }

    } else {
        autoElements.autoRecieved.innerText = `Recieved ${args.autoRoutine}.`
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

function updateAutoSelection() {
    socket.emit("update_auto_selection");
}

function showAuto() {
    teleElements.container.style.display = "none";
    autoElements.container.style.display = "grid";
    headerElements.teleButton.classList.remove("active");
    headerElements.autoButton.classList.add("active");
    tab = "auto";
}

function showTele() {
    autoElements.container.style.display = "none";
    teleElements.container.style.display = "grid";
    headerElements.autoButton.classList.remove("active");
    headerElements.teleButton.classList.add("active");
    tab = "tele";
}

showAuto();
switchAuto();

function switchAuto() {
    let blinkNumber = autoRoutines.indexOf(autoElements.select.value) + 2;
    autoElements.blinkButton.innerText = `${3} Blinks`;
    socket.emit("update_auto_selection", autoElements.select.value);
}

function sendBlink() {
    socket.emit("auto_blink_test", 0);
}