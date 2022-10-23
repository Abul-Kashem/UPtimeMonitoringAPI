/***
 * Title: Sample Handler
 * Description: Sample Handler
 * Author:
 * Date:
 */

// module scaffolding
const handler = {}

handler.sampleHandler = (request_properties, callback) => {
    console.log(request_properties)
    
    callback(200, {
        message: 'This is a sample url',
    })
}

module.exports = handler