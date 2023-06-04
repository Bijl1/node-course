const express = require("express")
const app = express()
const PORT = 3000
app.use(express.json())
app.listen(PORT, () => console.log(`Server Connected to port ${PORT}`))

const connectDB = require("./db");
connectDB();

process.on("unhandledRejection", err => {
    console.log(`An error occurred: ${err.message}`)
    server.close(() => process.exit(1))
  })

