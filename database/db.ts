import { connect as connectDB, connections, disconnect as disconnectDB } from 'mongoose';
import { config } from 'dotenv';
import { green, red, blue } from 'colors';

config();

const dbConnection = {
  isConnected: 0
}

export const connect = () => {

  if (!!dbConnection.isConnected) return console.log(`${blue('Database already connected')}`);

  if (connections.length > 0) {
    dbConnection.isConnected = connections[0].readyState;
    if (dbConnection.isConnected === 1) return
  }

  connectDB(process.env.MONGO_DB || '')
    .then(() => {
      console.log(`${green('Database connected')}`);
      dbConnection.isConnected = 1;
    })
    .catch(error => console.log(`${red('Database conection error')}`, error))
}

export const disconnect = () => {

  if (process.env.NODE_ENV === 'development') return;

  if (!dbConnection.isConnected) return;
  disconnectDB().then(() => console.log('DB Disconnected'));

}