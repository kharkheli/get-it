import { connect } from "mongoose";

// ? Start MongoDB server in terminal:
// mongod --port 27017 --dbpath C:\MongoDBFiles\data\db

const connectToDatabase = async (uri: string): Promise<void> => {
  if (!uri) throw new Error("No MongoDB URI found in environment variables");
  try {
    await connect(uri);
    console.log("Connected to database");
  } catch (e) {
    console.log("Error connecting to database");
    console.log(e);
  }
};

export default connectToDatabase;
