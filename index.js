let fs = require('fs'); //Подключил модуль для работы с файлами
let http = require('http'); //Подключил модуль для работы http

const PORT = process.env.PORT || 80

console.log('start');
http.createServer(function (request, response) {
    if (request.url != '/favicon.ico') {
        fs.readFile('pages/' + request.url + '.html', (err, data) => {
            response.setHeader('Content-Type', 'text/html');

            if (!err) {
                response.statusCode = 200;
                response.write(data);
                response.end();
            } else {
                fs.readFile('pages/404.html', (err, data) => {
                    if (err) throw err;
                    response.statusCode = 404;
                    response.write(data);
                    response.end();
                });
            }

        });
    }
}).listen(PORT);

//Запуск скрипта через команду: node index.js В браузере страница: http://localhost:8888/