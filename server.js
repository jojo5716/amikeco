import express from 'express'; // eslint-disable-line import/no-extraneous-dependencies

const path = require('path');


const app = express();

app.use('/static', express.static(`${__dirname}/public`));
app.use('/dist', express.static(`${__dirname}/dist`));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'example', 'server.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'example', 'server.html'));
});

app.listen(3000);
