import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: [true, "Please enter your name"],
            minLength: 2,
            maxLength: 50
        },
        password: {
            type: String,
            required: true,
            minLength: 6,
            maxLength: 20,
        },
        role: {
            type: String,
            enum: ["user", "admin"],
            default: "user"
        },
        refreshToken: {
            type: String
        }
    },
    { timestamps: true }
)

// Function for hashing passwords
userSchema.pre("save", async function () {
    if (!this.isModified("password")) return;
    this.password = await bcrypt.hash(this.password, 10)
})//Dont forget to assign

//Function for checking passwords
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = async function () {
    return jwt.sign(
        {
            _id: this._id
        },
        ACCESS_TOKEN_SECRET,
        {
            expiresIn: ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = async function () {
    return jwt.sign(
        {
            _id: this._id
        },
        REFRESH_TOKEN_SECRET,
        {
            expiresIn: REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema) 