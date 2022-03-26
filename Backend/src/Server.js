const app = require('./app/app')

const port = 3333


app.listen(port, () => {
    console.log("SERVER RUNNING: " + port)
})