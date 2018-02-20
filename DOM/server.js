const express = require('express'); // A really simple server setup, provides an abstraction to how we serve files and requests.
const http = require('http'); // hyper text transfer protocol - The communication standard between computers (this is the insecure one, secure is https)
const path = require('path'); // A module that allows me to look through my own computer for files
const chalk = require('chalk'); // Chalk is just a coloring utility for console.log (that i really like)

const app = express(); // Make me a server
const server = http.createServer(app); // Attach it to http (so that we can communicate)
const rootPath = process.cwd(); // process.cwd() means this path is wherever these files are being served from so think e.g. Users/eliot/documents/1801B/DOM
const PORT = 3000; // We can choose any number in the world here - its a number that represents our connection

app.get('/', (req, res) => {
	// If you hit localhost:3000/ serve up.... index.html
  res.status(200).sendFile(path.join(rootPath, './index.html'));
});

// If you ask for anything else, you get to look at any file in this folder
app.use(express.static(rootPath));

// Error logging (did none of the above work?) Then log it.
app.use((err, req, res, next) => {
	console.log(chalk.yellow(err, typeof next));
	console.log(chalk.red((err.stack)));
	res.status(err.status || 500).send(err.message || 'Internal server error.');
});

// Take this now defined server, and serve files.
server.listen(PORT, () => {
	console.log(chalk.green(`Fake server has begun listening on PORT ${PORT}.`));
});
