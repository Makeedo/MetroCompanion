'use strict'

var routeFinder = require("../core/route_finder");

module.exports = {

    '/': {
        methods: ["get", "post"],
        fn: function(req, res) {

            if(req.method === "GET"){
                res.render('index', { title: 'get fastest metro route' });
            } else if (req.method === "POST") {

                var shortestRoute = routeFinder.getShortestRoute(req.body.start, req.body.destination)
                res.json(shortestRoute);

            }



        }
    },

    '/netzplan': {
        methods: ["get"],
        fn: function(req, res) {

            if(req.method === "GET"){
                res.render('netzplan', { title: 'get fastest metro route' });
            } else if (req.method === "POST") {

                var shortestRoute = routeFinder.getShortestRoute(req.body.start, req.body.destination)
                res.json(shortestRoute);

            }



        }
    },


}