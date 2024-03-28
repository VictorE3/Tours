const mongoose = require("mongoose");

// const connection = async () => {}

export const connectToDB = async () => {
  try {
    // if(connection.isConnected){
    //     console.log("Using exsting connection");
    //     return

    // }

    const db = await mongoose.connect(process.env.MONGODB);
    //   connection.isConnected = db.connections[0].readyState
    console.log("Connected to the database");
  } catch (error) {
    console.log("Not connected to the database");
  }
};
