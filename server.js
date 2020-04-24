const express = require('express');
const path = require('path');
const router = express.Router();

const app = express();
const { port = 3000 } = process.env;

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use('/', router);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
})