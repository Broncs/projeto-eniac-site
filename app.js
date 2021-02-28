var express = require('express');
const mysql = require('mysql');
var bodyParser = require('body-parser');

//create connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'nodemysql',
});

//connect
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Mysql connected... ');
});

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/createdb', (req, res) => {
  let sql = 'CREATE DATABASE nodemysql';
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('database created...');
  });
});

app.get('/', (req, res) => {
  let sql =
    'CREATE TABLE clientes (id int AUTO_INCREMENT, nome VARCHAR(255), sobrenome VARCHAR(255), email VARCHAR(255), telefone int, mensagem VARCHAR(255), PRIMARY KEY (id))';
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    console.log('tabela clientes criada... ');
  });
});

app.get('/obrigado', (req, res) => {
  res.sendFile(__dirname + '/public/obrigado.html');
});

app.post('/', (req, res) => {
  let sql = 'INSERT INTO clientes SET ?';
  let query = db.query(sql, req.body, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.redirect('/obrigado');
  });
});

app.listen('3000', () => {
  console.log('server started on port 3000');
});
