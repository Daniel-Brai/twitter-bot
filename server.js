// dependencies
const express = require('express')

// import utils
const { alive_server } = require('./utils/alive')
const { alive_bot } = require('./utils/tweet')

// initilaizing the app
const app = express()

// routes
app.get('/', (req, res) => {
    res.status(200).send('Thanks for trying out this simple twitter bot app by Daniel Brai.')
})

// calling to keep the the bot and server alive
alive_server()
alive_bot()

// server setup
const PORT = process.env.PORT || 3002

app.listen(PORT, () => {
    console.info(` ⚡ [server]: server is listening at port ${PORT}....`)
})
