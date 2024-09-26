const AuthRoute = require('./Auth.route')
const RoomRoute = require('./Room.route')
const HouseRoute = require('./House.route')

module.exports = (app) =>{
    app.use('/api/v1/user',AuthRoute),
    app.use('/api/v1/room',RoomRoute),
    app.use('/api/v1/house',HouseRoute)
}