import "module-alias/register"
import "reflect-metadata"
import dotenv from "dotenv"
dotenv.config()
import config from "config"

import App from "@infra/server/app"

const app = new App().express

app.listen(config.get("port"), () =>
    console.log(`Server running on port ${config.get("port")}`)
)

process
    .on("unhandledRejection", (error, p) => {
        console.error(new Date().toUTCString() + "Unhandled Rejection", error)
    })
    .on("uncaughtException", (error) => {
        console.error(new Date().toUTCString() + " uncaughtException:", error)
    })

// todo logger
// todo config
