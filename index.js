let cluster = require("cluster");

//Is the file being executed in master mode ??
if (cluster.isMaster) {

    //Cause index.js to be executed **again** child mode
    cluster.fork();
    
    cluster.fork();
    cluster.fork();
    cluster.fork();
} else {

    //In a child Im going to act like a server && do not nothing else
    let express = require("express");
    let App = express();

    function doWork(duration) {
        let time = Date.now();
        while (Date.now() - time < duration) {
        }
    }

    App.get('/', function (req, res) {

        //Single Thread Duration ************************
        doWork(4000);

        res.send('Hello Sourav');
    })
    App.get("/first", function (req, res) {
        res.send('How fast is this !!');
    })

    let Port = 2020;
    App.listen(Port, function () {
        console.log(`server Run ${Port}`);
    })
}
