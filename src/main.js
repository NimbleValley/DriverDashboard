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
  connected: false
}




const socketio = new Server(server);

function update() {
  dashboardValues.connected = ntcore.isRobotConnected();
  socketio.emit('update', dashboardValues);
  //console.log(dashboardValues.Rot)
}

socketio.on("connection", (socket) => {
  socket.on("refresh", tryConnect);
});

setInterval(update, 100);

//TODO: Just for debugging, change to team number for default
// Network table things
const ntcore = NetworkTables.getInstanceByURI('127.0.0.1');

// Subscriptions
const matchTimeTopic = ntcore.createTopic('/SmartDashboard/match_time', NetworkTablesTypeInfos.kDouble);
matchTimeTopic.subscribe((value) => {
  dashboardValues.matchTime = value;
}, true);

function tryConnect(address) {
  if (address == "" || address == null) {
    return;
  }

  ntcore.changeURI(address);
}