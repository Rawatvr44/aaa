import mongoose from "mongoose";

export const connectDB =async()=>{
  try{
    const conn=await mongoose.connect("mongodb+srv://rawatvr44:QJGdYvYKIB4LZbJI@cluster0.pu3b8.mongodb.net/spotify-clone?retryWrites=true&w=majority&appName=Cluster0");
    console.log(`Connected to mongo db ${conn.connection.host}`);
    
  }catch(error){
    
console.log("Failed to connect",error);
process.exit(1)

  }
}