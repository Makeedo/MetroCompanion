'use strict'

var viennaMetroPlan = require("../resources/metro_plans/vienna"),
    _ = require("underscore"),
    Graph = require("./graph"),

    each = function(object, callback){

        var keys = Object.keys(object),
            len = keys.length,
            index = 0;

        while(len--){

            var currentKey = keys[index],
                currentValue = object[currentKey],
                result = callback(currentValue, currentKey);

            if(result === false){
               break;
            }

            index++

        }

    },

    getLineOfStop = function(stop){

        //if stop is a junction, return all possible lines
        var result = viennaMetroPlan.junctions[stop];

        if(!result){

            each(viennaMetroPlan, function(lineDetails, line){
                if (line !== "junctions"  && lineDetails.stopSequence.indexOf(stop) !== -1){

                    result = line;
                    return false;

                }
            });

        }

        return result;

    },

    getStopsToTravel = function(line, start, destination){

        var stopsOfLine = viennaMetroPlan[line].stopSequence,
            indexOfStart = stopsOfLine.indexOf(start),
            indexOfDestination = stopsOfLine.indexOf(destination),
            stopsBetween;

        if(indexOfStart > indexOfDestination) {
            stopsBetween = stopsOfLine.slice(indexOfDestination, indexOfStart).reverse();
        } else {
            stopsBetween = stopsOfLine.slice(indexOfStart+1, indexOfDestination+1);
        }

        return {stopsToTravel: stopsBetween, distanceToTravel: indexOfDestination - indexOfStart};

    },

    getDirection = function (line, directionIndicator) {

        var stopsOfLine = viennaMetroPlan[line].stopSequence,
            direction = directionIndicator < 0 ? stopsOfLine[0] : stopsOfLine[stopsOfLine.length-1];

        return direction;

    },



    getShortestRoute = function(start, destination){

        var graph = new Graph(viennaMetroPlan, function(from, to, travelTime){
            if(from === "U3_HER" && to === "U3_STE"){
                return 100;
            } else {
                return travelTime;
            }
        });


        var shortestRoute = graph.findShortestPath(start, destination); // => ['c', 'b', 'a', 'c', 'b']




        return shortestRoute;

    };

module.exports = {
    getShortestRoute : getShortestRoute
};
