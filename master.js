const hapi = require('hapi');

var server = new hapi.Server(0);

const con = server.connection({
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 3000,
});

var engine = require('hapi-react')();
server.register(require('inert'), ()=>{});
server.register(require('vision'), (err) => {

    server.views({
        defaultExtension: 'jsx',
        engines: {
            jsx: engine, // support for .jsx files
            js: engine // support for .js
        },
        relativeTo: __dirname,
        path: 'views'
    });

    server.route({
        method: 'GET',
        path: '/public/{path*}',
        handler: {
            directory: {
                path: './public',
                listing: false,
                index: true,
            },
        },
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: function(request, reply) {
            reply.view('home', {
                name: 'bono'
            });
        }
    });

    server.start(() => {});
});