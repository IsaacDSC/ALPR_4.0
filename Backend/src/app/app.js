const express = require('express')
const routes = require('../routes/routes')

class App {
    constructor() {
        this.express = express()
        this.middlewares()
        this.routers()
    }

    middlewares() {
        this.express.use(express.json());
    }

    routers() {
        this.express.use(routes)
    }
}

module.exports = new App().express