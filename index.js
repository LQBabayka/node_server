let fs = require('fs'); //Подключил модуль для работы с файлами
let http = require('http'); //Подключил модуль для работы http

console.log('start');
http.createServer(function (request, response) {
    if (request.url != '/favicon.ico') {
        /*
        console.log(request.url); //Выводится: /(та часть, которая идет после локалхоста и порта) и /favicon.ico
        // console.log(request.method); //Выводится: GET
        // console.log(request.headers); //Выводится: host, connection, pragma, accept,  referer (С подробностями)

            //Тут самая основная часть, без которой ничего не работает
        // response.writeHead(200, {'Content-Type': 'text/html'});// в этом случае html теги работают, если заменить на plain - будет только текст
        // response.write('<h1>What guys, anime?</h1>');
        // response.end();
        let dveste = response.writeHead(200, { 'Content-Type': 'text/html' });// в этом случае html теги работают, если заменить на plain - будет только текст
        let urla = request.url
        switch (urla) {
            case '/index':
                dveste
                response.write('<h1>Tuta index</h1>');
                break;

            case '/about':
                dveste
                response.write('<h1>Tuta abaut</h1>');
                break;

            case '/epta':
                dveste
                response.write('<h1>Nu a tut epta</h1>');
                break;

            default: //этат ема нужна, если ни одно значение не подойдет
            response.writeHead(404, { 'Content-Type': 'text/html' });
            response.write('404');
        }

        response.end();
        */
        fs.readFile('pages/' + request.url + '.html', (err, data) => {
            response.setHeader('Content-Type', 'text/html');

            if (!err) {
                response.statusCode = 200;
                response.write(data);
            } else {
                response.statusCode = 404;
                response.write('Page not found');
            }
            response.end();
        });
    }
}).listen(8888);

//Запуск скрипта через команду: node index.js В браузере страница: http://localhost:8888/