import mongoose from "mongoose"
import bcrypt from "bcrypt"

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    rating: {
        type: Number,
        required: true
    },
    releaseDate: {
        type: Date
    },
    duration: {
        type: Number
    }
},
    { timestamps: true }
)

export const Movie = mongoose.model("Movie", movieSchema) 