var mysql = require('mysql');
var conexion= mysql.createConnection({
    host : '127.0.0.1', //localhost
    database : 'eventos',
    user : 'root',
    password : '1qaz0plm',
});

conexion.connect(function(err) {
    if (err) {
        console.error('Error de conexion: ' + err.stack);
        return;
    }
    console.log('Conectado con el identificador ' + conexion.threadId);
});