var s = Snap("#svgout");
var plan = null;


var netzplan = Snap.load("../images/1.svg", function ( loadedFragment ) {

    //loadedFragment.select('path[id="U1_GFS"]').click(clickHandler);

    s.append( loadedFragment );
    plan = loadedFragment;
    s.zpd();

});

var getShortestRoute = function(evt){
    var start = document.querySelector('input[name="start"]').value;
    var dest = document.querySelector('input[name="destination"]').value;

    $.post( "http://localhost:3000/", { start: start, destination: dest })
        .done(function( data ) {
            alert(JSON.stringify(data))
            if(data !== null){
                var i = 0, len = data.length;
                while(len--){

                    var stop = Snap.select("path[id='"+data[i]+"']");

                    if(stop){
                        stop.attr({
                            fill: "#fc0",
                            stroke: "#000",
                            class: ""
                        });
                    }



                    i++;
                }
            }

        });

    return false;
};

var clickHandler = function(e){

    this.attr({
        fill: "#fc0",
        stroke: "#blue",
    });


}




