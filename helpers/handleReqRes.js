/***
 * Title: Handle Request Response
 * Description: Handle Request Response
 * Author:
 * Date:
 */


// dependencies
const url = require('url')
const { StringDecoder } = require('string_decoder')
const routes = require('../routes')
const { notFoundHandler } = require('../handlers/routeHandlers/notFoundHandler')



// module scaffolding
const handler = {}

handler.handleReqRes = (req, res) => {
    // request handling
    // get the url and parse it
    const parsed_url = url.parse(req.url, true)
    // console.log(parsed_url)
    const path = parsed_url.pathname
    const trimmed_path = path.replace(/^\/+|\/+$/g, '')
    const method = req.method.toLowerCase()
    const query_string_object = parsed_url.query
    const headers_object = req.headers

    const request_properties = {
        parsed_url,
        path,
        trimmed_path,
        method,
        query_string_object,
        headers_object,
    }

    const decoder = new StringDecoder('utf-8')
    let real_data = ''

    const chosen_handler = routes[trimmed_path] ? routes[trimmed_path] : notFoundHandler

    

    req.on('data', (buffer) => {
        real_data += decoder.write(buffer)
    })

    req.on('end', () => {
        real_data += decoder.end()

        chosen_handler(request_properties, (status_code, pay_load) => {
            status_code = typeof (status_code) === 'number' ? status_code : 500
            pay_load = typeof (pay_load) === 'object' ? pay_load : {}
    
            const pay_load_string = JSON.stringify(pay_load)
    
            // return the final response
            res.writeHead(status_code)
            res.end(pay_load_string)
        })

        // console.log(real_data)
        // response handle
        res.end('Hello Worlds!')
    })

}


module.exports = handler
