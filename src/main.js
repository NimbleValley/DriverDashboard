import { NetworkTables, NetworkTablesTypeInfos } from 'ntcore-ts-client';
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
app.use(express.static('./src'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = 3197;

const server = createServer(app);
server.listen(PORT, function () {
  console.log('Server running on port 3000')
});




// Dashboard values
var dashboardValues = {
  matchTime: 0,
  connected: false,
  intakeDeployed: false,
  pieceDetected: false,
  autoRoutine: 'Source 4-5'
}
var blinkID = 0;



const socketio = new Server(server);

function update() {
  dashboardValues.connected = ntcore.isRobotConnected();
  dashboardValues.autoRoutine = autoModeTopic.getValue();
  socketio.emit('update', dashboardValues);
  //console.log(dashboardValues.Rot)
}

socketio.on("connection", (socket) => {
  socket.on("refresh", tryConnect);
  socket.on("update_auto_selection", updateAutoSelection);
  socket.on("auto_blink_test", sendBlinkRequest);
});

setInterval(update, 100);

//TODO: Just for debugging, change to team number for default
// Network table things
const ntcore = NetworkTables.getInstanceByURI('3197');

// Subscriptions
const matchTimeTopic = ntcore.createTopic('/SmartDashboard/match_time', NetworkTablesTypeInfos.kDouble);
matchTimeTopic.subscribe((value) => {
  dashboardValues.matchTime = value;
}, true);

const intakeStateTopic = ntcore.createTopic('/SmartDashboard/intake_deployed', NetworkTablesTypeInfos.kBoolean);
intakeStateTopic.subscribe((value) => {
  dashboardValues.intakeDeployed = value;
}, true);

const pieceDetectTopic = ntcore.createTopic('/SmartDashboard/piece_detected', NetworkTablesTypeInfos.kBoolean);
pieceDetectTopic.subscribe((value) => {
  dashboardValues.pieceDetected = value;
}, true);

// Publishers
const autoModeTopic = ntcore.createTopic('/Auto/autoMode', NetworkTablesTypeInfos.kString, 'No Auto');
await autoModeTopic.publish();
updateAutoSelection('Source 4-5');

const blinkTestTopic = ntcore.createTopic('/Auto/blinkID', NetworkTablesTypeInfos.kInteger, 0);
await blinkTestTopic.publish();
blinkTestTopic.setValue(0);


function tryConnect(address) {
  if (address == "" || address == null) {
    return;
  }

  ntcore.changeURI(address);
}

function updateAutoSelection(value) {
  autoModeTopic.setValue(value);
}

function sendBlinkRequest(value) {
  blinkID ++;
  blinkTestTopic.setValue(blinkID);
}