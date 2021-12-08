const express = require('express');
const app = express();
const port = 8080;

<<<<<<< HEAD
app.get('/', (req, res) => res.send('Hello World! - '));
=======
app.get('/', (req, res) => res.send('Hello World!'));
>>>>>>> 66ff71ae6567bf39d13950727660a005bf61b504

app.listen(port);
console.log(`App running on http://localhost:${port}`);
