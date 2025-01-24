import "module-alias/register"
import "reflect-metadata"
import dotenv from "dotenv"
dotenv.config()
import config from "config"
import express from "express"
import morgan from "morgan"

import authRoutes from "@pres/routes/auth.routes"
import userRoutes from "@pres/routes/user.routes"

console.log("🚀 ~ config:", config)
const app = express()
app.use(express.json())

app.use(morgan("combined"))
app.use("/auth", authRoutes)
app.use("/users", userRoutes)

const PORT = 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

process
    .on("unhandledRejection", (error, p) => {
        console.error(new Date().toUTCString() + "Unhandled Rejection", error)
    })
    .on("uncaughtException", (error) => {
        console.error(new Date().toUTCString() + " uncaughtException:", error)
    })

// todo logger
// todo config
