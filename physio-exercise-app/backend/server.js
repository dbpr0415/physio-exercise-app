const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 5001;

app.use(cors());
app.use(bodyParser.json());

// Endpoint to fetch exercise categories and exercises
app.get('/api/exercises', (req, res) => {
    fs.readFile('./data.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send({ error: 'Failed to read data' });
        } else {
            res.send(JSON.parse(data));
        }
    });
});

// Endpoint to save a new exercise program
app.post('/api/saveProgram', (req, res) => {
    const newProgram = req.body;

    fs.readFile('./data.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send({ error: 'Failed to read data' });
        } else {
            const jsonData = JSON.parse(data);
            newProgram.id = jsonData.programs.length + 1; // Assign a unique ID
            jsonData.programs.push(newProgram);

            fs.writeFile('./data.json', JSON.stringify(jsonData, null, 2), (err) => {
                if (err) {
                    res.status(500).send({ error: 'Failed to save program' });
                } else {
                    res.send({ message: 'Program saved successfully' });
                }
            });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
