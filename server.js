const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

let visitors = [];

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.post('/download', (req, res) => {
    const { password } = req.body;

    if (password === 'asdf') {
        const data = visitors.join('\n');

   
        fs.writeFileSync(path.join(__dirname, 'public', 'visitors.txt'), data);

        
        res.download(path.join(__dirname, 'public', 'visitors.txt'), 'visitors.txt');
    } else {
        res.status(401).send('Unauthorized');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
