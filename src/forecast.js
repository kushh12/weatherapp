const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=bbbf916d5698e372ca684bbae9b03734&query=' + latitude + ',' + longitude


    request({url, json: true}, (error, {body}) => {

        if(error){
            callback('Unable to connect to internet. Please try again', undefined)
        } else if (body.error) {
            callback('Unable to find the location.', undefined)
        } else {
            callback(undefined,{

                Weather_description: body.current.weather_descriptions[0],
                Temperature: 'Its ' + body.current.temperature + ' degrees out there',
                Feels_Like: 'It feels like ' + body.current.feelslike

            })
        }

    })
}

module.exports = forecast