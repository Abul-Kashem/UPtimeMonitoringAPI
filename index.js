/***
 * Title: Uptime Monitoring Application
 * Description: A restful API to monitor upr or down time of user define
 * Author:
 * Date:
 */

// dependencies
const http = require('http')
const { handleReqRes } = require('./helpers/handleReqRes')
const environment = require('./helpers/environments')
const data = require('./lib/data')

// app object - module scaffolding
const app = {}


// tesing file system
// data.create('test', 'newFile', { name: 'Bangladesh', language: 'Bangla' }, (err) => {
//     console.log(`error was`, err)
// })

// data.read('test', 'newFile', (err, result) => {
//     console.log(err, result)
// })

// data.update('test', 'newFile', { name: 'England', language: 'English' }, (err) => {
//     console.log(`error was`, err)
// })

// data.delete('test', 'newFIle', (err) => {
//     console.log(err)
// })




// configuration
// app.config = {
//     port: 3000,
// }


// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes)
    // server.listen(app.config.port, () => {
    //     // console.log(`environment variable is ${process.env.NODE_ENV}`)
    //     console.log(`listening to port ${app.config.port}`)
    // })

    server.listen(environment.port, () => {
        // console.log(`environment variable is ${process.env.NODE_ENV}`)
        console.log(`listening to port ${environment.port}`)
    })
}

// handle Request Response
app.handleReqRes = handleReqRes

// start the server
app.createServer()