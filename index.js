// process.env.UV_THREADPOOL_SIZE = 1;
// let cluster = require("cluster");

//Is the file being executed in master mode ??
// if (cluster.isMaster) {

//Cause index.js to be executed **again** child mode
// cluster.fork();
//
// cluster.fork();
// cluster.fork();
// cluster.fork();
// cluster.fork();
// cluster.fork();

// cluster.fork();
// cluster.fork();
// cluster.fork();
// cluster.fork();
// } else {

//In a child Im going to act like a server && do not nothing else
let express = require("express");
let crypto = require('crypto');
let App = express();

// function doWork(duration) {
//     let time = Date.now();
//     while (Date.now() - time < duration) {
//     }
// }

App.get('/', function (req, res) {

    //Single Thread Duration ************************
    // doWork(4000);

    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        res.send('Hello Sourav 2020');
    })
})
App.get("/first", function (req, res) {
    res.send('How fast is this !!');
})

let Port = 2021;
App.listen(Port, function () {
    console.log(`server Run ${Port}`);
})
// }
