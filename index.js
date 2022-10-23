/***
 * Title: Uptime Monitoring Application
 * Description: A restful API to monitor upr or down time of user define
 * Author:
 * Date:
 */

// dependencies
const http = require('http')
const { handleReqRes } = require('./helpers/handleReqRes')

// app object - module scaffolding
const app = {}

// configuration
app.config = {
    port: 3000,
}

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes)
    server.listen(app.config.port, () => {
        console.log(`environment variable is ${process.env.NODE_ENV}`)
        console.log(`listening to port ${app.config.port}`)
    })
}

// handle Request Response
app.handleReqRes = handleReqRes

// start the server
app.createServer()