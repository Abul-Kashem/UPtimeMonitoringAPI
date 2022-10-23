/***
 * Title: Notfount Handler
 * Description: Notfount Handler
 * Author:
 * Date:
 */

// module scaffolding
const handler = {}

handler.notFoundHandler = (request_properties, callback) => {
    console.log('Not Found')
    callback(404, {
        message: 'Your requested url are not found'
    })
}

module.exports = handler