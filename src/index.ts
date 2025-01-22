import "reflect-metadata"
import express from "express"
import authRoutes from "./presentation/routes/auth.routes"
import userRoutes from "./presentation/routes/user.routes"
import morgan from "morgan"

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

        process.exit(1)
    })

// todo logger
