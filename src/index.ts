import { Server } from "./bootstrap/server";
import config from './config'

const server = new Server(config);
server.bootstrap()