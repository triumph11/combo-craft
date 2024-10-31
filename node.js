const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files

app.post('/purchase', (req, res) => {
    const { username } = req.body;

    // Here you would integrate your payment processing
    // For now, we'll simulate successful payment
    const paymentSuccessful = true;

    if (paymentSuccessful) {
        fs.appendFile('usernames.txt', username + ',', (err) => {
            if (err) {
                return res.status(500).json({ message: 'Error logging username.' });
            }
            res.json({ message: 'Purchase successful! Username logged.' });
        });
    } else {
        res.status(400).json({ message: 'Payment failed.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
