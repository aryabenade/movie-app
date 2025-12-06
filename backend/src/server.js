import express from "express"
import { PORT } from "./config/env.js"
import { connectDB } from "./db/mongodb.js"
import { movieRouter } from "./routes/movie.route.js"
import { authRouter } from "./routes/auth.route.js"

const app = express()

const port = PORT || 5000

app.use(express.json()); // <--- this is critical
app.use(express.urlencoded({ extended: true })); // optional, for form data

// app.get('/', (req, res) => {
//     res.json({
//         message: "Let's start this project"
//     })
// })

app.use('/api/auth', authRouter)
app.use('/api/movies', movieRouter)

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