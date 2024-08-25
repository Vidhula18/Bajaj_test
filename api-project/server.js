const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Root route
app.get('/', (req, res) => {
    res.send('API is running');
});

// POST endpoint
app.post('/bfhl', (req, res) => {
    const data = req.body.data || [];
    const user_id = "Vidhula Sundhari Ganesh"; // Your user ID
    const email = "vidhulasundhari.ganesh2021@vitstudent.ac.in"; // Your email
    const roll_number = "21BCE1692"; // Your roll number

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const lowestChar = alphabets.filter(item => item.toLowerCase() === item);
    const highestLowercaseAlphabet = lowestChar.length ? [lowestChar.sort().pop()] : [];

    res.json({
        is_success: true,
        user_id: user_id,
        email: email,
        roll_number: roll_number,
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet,
    });
});

// GET endpoint
app.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1,
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
