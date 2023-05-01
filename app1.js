// process.on('uncaughtException', ex => {
//     winston.error(ex.message, ex);

// });












const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    fs.readFile('index.html', (err, data) => {

        if (err)
            console.log(err);

        res.end(data);
    });
});

server.listen(3001, console.log('server 3000 portda ishladi'));


 





























// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {

//     if (req.method === 'GET') {

//         if (req.url === '/')
//             res.write('Bosh sahifa onlain refrash boldi');

//         else if (req.url === '/aloqa')
//             res.write('aloqa sahifasiham onlain refrash boldi');

//         else if (req.url === '/product')
//             res.write('product sahifaaaa');

//         else if (req.url === '/home')
//             res.write('home sahifa');

//         else
//             res.write('<h1>401 sahifa topilmadi</h1>');

//     }

//     res.end();
// });

// server.listen(3001, console.log('server 3000 portda ishladi'));