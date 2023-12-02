const express = require('express');
const app = express();
const port = 8000;
const DB = require("./db/conn")
const User = require("./db/user")
const cors = require('cors')

app.use(express.json());
app.use(cors())
DB()

app.post("/register", async (req, res) => {
    try {
        const { name, email, phone } = req.body;
        const user = new User({ name, email, phone });
        await user.save();
        res.status(201).json({ message: "Registration successfully" })
    } catch (error) {
        res.status(500).json({ error: "Registration failed" })
    }
})


app.listen(port, () => {
    console.log(`app is listing on ${port}`)
})