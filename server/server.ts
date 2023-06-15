import express from 'express'
import * as Path from 'node:path'

import usersRoutes from './routes/users'
import postsRoutes from './routes/posts'
import groupsRoutes from './routes/groups'

const server = express()

server.use(express.json())
// server.use(express.static(join(__dirname, 'public')))

server.use('/api/v1/users', usersRoutes)
server.use('/api/v1/posts', postsRoutes)
server.use('/api/v1/groups', groupsRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use('/assets', express.static(Path.resolve(__dirname, '../assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve(__dirname, '../index.html'))
  })
}

// server.get('*', (req, res) => {
//   res.sendFile(join(__dirname, 'public', 'index.html'))
// })

export default server
