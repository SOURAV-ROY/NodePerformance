let Port = 2022;

// process.env.UV_THREAD_POOL_SIZE = 1;
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

//In a child is going to act like a server && do nothing else
const OS = require('os');
const cluster = require('cluster');
let express = require("express");
let crypto = require('crypto');
let App = express();

const numCPU = OS.cpus().length;
// console.log('Number Of CPU', numCPU);
// console.log(process.pid);

// function doWork(duration) {
//     let time = Date.now();
//     while (Date.now() - time < duration) {
//     }
// }

App.get('/', function (req, res) {

    //Single Thread Duration ************************
    // doWork(4000);

    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        res.send('Hello SOURAV 2022');
    })
})
App.get("/first", function (req, res) {
    res.send('How fast is this !!');
})

App.get("/long", function (req, res) {
    for (let i = 0; i < 1e8; i++) {
        //    Long process
    }
    res.send(`How long is this ${process.pid}`);
    cluster.worker.kill();
})

if (cluster.isMaster) {
    for (let i = 0; i < numCPU; i++) {
        cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} is died`);
        cluster.fork();
    })
} else {
    App.listen(Port, () => {
        console.log(`server Run ${process.pid} ${Port}`);
    })
}

// App.listen(Port, () => {
//     console.log(`server Run ${Port}`);
// })
