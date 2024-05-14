import { WebSocketServer } from 'ws';
import { GameManager } from './GameManager';

const wss = new WebSocketServer({ port: 8080 });
const gamechanger = new GameManager();
wss.on('connection', function connection(ws) {
 
  gamechanger.addUser(ws);

 
});