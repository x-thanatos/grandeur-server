const Koa = require('koa')
const app = new Koa()
const server = require('http').createServer(app.callback())
const io = require('socket.io')(server, {
    path: '/socket'
})

app.use(ctx => {
    ctx.body = `<h1>Koa middle-ware server is running...</h1>`
})

io.on('connection', function (socket) {
    socket.on('msg', (message) => console.log(message))
    setInterval(() => socket.emit('date-change', Date.now()), 1000)
})

server.listen(3000, () => {
    console.log('Koa middle-ware server is running...')
})
