import mongoose from "mongoose"
import { MONGODB_URI } from "../config/env.js"

export const connectDB = async () => {
    try {
        if (!MONGODB_URI) throw new Error("MONGODB_URI is not set")
        const conn = await mongoose.connect(MONGODB_URI)
        console.log("MONGODB CONNECTED SUCCESSFULLY:", conn.connection.host)
    } catch (error) {
        console.error("Error connecting to MONGODB:", error)
        process.exit(1)
    }
}