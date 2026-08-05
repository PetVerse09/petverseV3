const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());

// Serve yung index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Pi Payment Approval
app.post('/approve', (req, res) => {
    console.log('✅ APPROVED:', req.body.paymentId);
    // Dito mo i-save sa database na "pending" yung payment
    res.json({ success: true });
});

// Pi Payment Completion  
app.post('/complete', (req, res) => {
    console.log('✅ COMPLETED:', req.body.paymentId, 'TX:', req.body.txid);
    // Dito mo i-update yung pet stats sa database
    res.json({ success: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('🚀 Server running on port ' + PORT));