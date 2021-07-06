const express = require('express')
const path = require('path')

const planetRoutes = require('./routes/planets')
const maoriSkyRoutes = require('./routes/maorisky')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/planets', planetRoutes)
server.use('/api/v1/maorisky', maoriSkyRoutes)

module.exports = server
