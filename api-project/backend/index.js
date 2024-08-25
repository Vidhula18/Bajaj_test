const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const user_id = "Vidhula_Sundhari_Ganesh_25062003"; // Change as needed
const email = "vidhulasundhari.ganesh2021@vitstudent.ac.in"; // Change as needed
const roll_number = "21BCE1692"; // Change as needed

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

// POST Method
app.post('/bfhl', (req, res) => {
    const inputData = req.body.data || [];
    const numbers = inputData.filter(item => !isNaN(item));
    const alphabets = inputData.filter(item => isNaN(item));
    const lowestLowerCase = alphabets.filter(char => char === char.toLowerCase());
    const highestLowercaseAlphabet = lowestLowerCase.length > 0 
        ? [lowestLowerCase.reduce((a, b) => (a > b ? a : b))] 
        : [];

    res.json({
        is_success: true,
        user_id: user_id,
        email: email,
        roll_number: roll_number,
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet
    });
});

// GET Method
app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
