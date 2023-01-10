const express = require('express');
const app = express();

const trainees = [
	{ name: 'Levi', region: 'north-west' },
	{ name: 'Meron', region: 'north-west' },
	{ name: 'Anosh', region: 'north-west' },
];

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/trainees', (req, res) => {
    res.send(trainees);
});

app.listen(3000, () => {
	console.log('Server is listening on port 3000.Ready to accept request!');
});
