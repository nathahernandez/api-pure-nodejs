const http = require('http')
const routes = require('./routes')


const server = http.createServer((req, res) => {
    console.log(`${req.method} | ${req.url}`)

    const route = routes.find(({ method, endpoint }) => endpoint === req.url && method === req.method)

    if(route){
        route.handler(req, res)
    }
    else {
        res.writeHead(404, {'content-type' : 'application/json'});
        res.end(`Cannot ${req.method} and ${req.url}`)
    }

})

server.listen(4000, () => {
    console.log('Running in http://localhost:4000/')
})