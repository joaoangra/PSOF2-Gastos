const express = require('express');

const routes = express.Router();

const jvs = require('./controllers/jvs');

routes.get('/', (req, res)=>{
    res.send('API Clinica Respondendo!')
});

routes.post('/gastos', jvs.create)
routes.get('/gastos', jvs.read)
routes.put('/gastos/:id', jvs.update)
routes.delete('/gastos/:id', jvs.del)

module.exports = routes;