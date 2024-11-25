// Get the express package 
const express = require('express');
const mariadb = require('mariadb')
const nodemon = require('nodemon')
// Instantiate an express (web) app
const app = express();

// Define a port number for 
const PORT = 3000;

app.use(express.static('public'));

// configure the connection 
const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Black202',
    database: 'guestbook'
});

// Connect to the database
async function connect() {
    try {
        let conn = await pool.getConnection();
        console.log('Connected to the database');
        return conn;
    } catch (err) {
        console.log('Error connecting to the database: ' + err);
    }
}

// Tell the app to encode data into JSON format
app.use(express.urlencoded({ extended: false }));

// Set your view (templating) engine to "EJS"
// (We use a templating engine to create dynamic web pages)
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // Log message to the server's console
    console.log("Hello, world - server!");
    res.render('home');
});

app.get('/form', (req, res) => {
    // Log message to the server's console
    console.log("Hello, world - server!");
    res.render('form');
});

app.get('/community', (req, res) => {
    // Log message to the server's console
    console.log("Hello, world - server!");
    res.render('community');
});





app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
