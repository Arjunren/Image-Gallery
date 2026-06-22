const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Serve the frontend and the uploaded images
app.use(express.static(path.join(__dirname, 'public')));

// Set up Multer to store the uploaded file in memory temporarily
const upload = multer({ storage: multer.memoryStorage() });
const dbPath = path.join(__dirname, 'data.json');

// Ensure the uploads directory exists
const uploadsDir = path.join(__dirname, 'public', 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}

// GET route to load initial photos
app.get('/api/photos', (req, res) => {
    if (fs.existsSync(dbPath)) {
        const data = fs.readFileSync(dbPath, 'utf8');
        res.json(JSON.parse(data));
    } else {
        res.json([]);
    }
});

// POST route to handle image uploads
app.post('/api/upload', upload.single('image'), async (req, res) => {
    try {
        if (!req.file) return res.status(400).json({ error: 'No image uploaded.' });

        const title = req.body.title || 'Untitled';
        const filename = `photo-${Date.now()}.webp`;
        const outputPath = path.join(uploadsDir, filename);

        // Convert to WebP and save
        await sharp(req.file.buffer)
            .webp({ quality: 80 })
            .toFile(outputPath);

        // Update JSON database
        let database = [];
        if (fs.existsSync(dbPath)) {
            database = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
        }

        const newEntry = {
            id: Date.now(),
            title: title,
            url: `/uploads/${filename}`
        };

        // Add to top of database and save
        database.unshift(newEntry);
        fs.writeFileSync(dbPath, JSON.stringify(database, null, 2));

        // Send success response
        res.json({ success: true, photo: newEntry });

    } catch (error) {
        console.error('Upload Error:', error);
        res.status(500).json({ error: 'Server Error processing image' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});