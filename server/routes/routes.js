const express = require('express');
const route = express.Router();

const services = require('../services/render');
const {create,find,update,deletion} = require('../controller/controller');


route.get('/', services.homeRoutes);

route.get('/add-user', services.add_user)

route.get('/update-user', services.update_user)


// API
route.post('/api/users',create);
route.get('/api/users', find);
route.put('/api/users/:id',update);
route.delete('/api/users/:id', deletion);


module.exports = route;