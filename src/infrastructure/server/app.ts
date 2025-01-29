import express, { Application } from "express"
import morgan from "morgan"

import authRoutes from "@pres/routes/auth.routes"
import userRoutes from "@pres/routes/user.routes"

class App {
    public express: Application

    constructor() {
        this.express = express()
        this.configureMiddleware()
        this.configureRoutes()
    }

    private configureMiddleware(): void {
        this.express.use(express.json())
        this.express.use(morgan("combined"))
    }

    private configureRoutes(): void {
        this.express.use("/auth", authRoutes)
        this.express.use("/users", userRoutes)
    }
}

export default App
