/***
 * Title: Routes
 * Description: Application routes
 * Author:
 * Date:
 */

// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandlers')

const routes = {
    sample: sampleHandler,
}

module.exports = routes