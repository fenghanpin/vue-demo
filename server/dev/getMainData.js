const API = require('../../src/config/api')
const data = require('../mock/MainData.json')

module.exports = function (app) {
    app.post(API.getMainData.url, (request, response) => {
        response.json(data)
    })
}
