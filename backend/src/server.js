import express from "express"
import { PORT } from "./config/env.js"
import { connectDB } from "./db/mongodb.js"

const app = express()

const port = PORT || 5000

app.get('/', (req, res) => {
    res.json({
        message: "Let's start this project"
    })
})

connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log("Error", error);
            throw error
        })

        app.listen(port, () => {
            console.log(`Server is running at https://localhost:${port}`);
        })
    })
    .catch((err) => {
        console.log("MONGO DB connection failed !!!", err);
    })