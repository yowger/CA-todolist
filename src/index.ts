import "reflect-metadata"
import express from "express"
import authRoutes from "./presentation/routes/auth.routes"
import userRoutes from "./presentation/routes/user.routes"

const app = express()
app.use(express.json())

app.use("/auth", authRoutes)
app.use("/users", userRoutes)

const PORT = 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
