const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const EXCEL_FILE = path.join(__dirname, 'comments.xlsx');

// Helper to read comments from Excel file
function readComments() {
  if (!fs.existsSync(EXCEL_FILE)) {
    return [];
  }
  const workbook = XLSX.readFile(EXCEL_FILE);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(sheet);
  return data;
}

// Helper to write comments to Excel file
function writeComments(comments) {
  console.log("💾 Writing comments to file:", comments);
  const ws = XLSX.utils.json_to_sheet(comments);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Comments');
  XLSX.writeFile(wb, EXCEL_FILE);
}

// function writeComments(comments) {
//   const ws = XLSX.utils.json_to_sheet(comments);
//   const wb = XLSX.utils.book_new();
//   XLSX.utils.book_append_sheet(wb, ws, 'Comments');
//   XLSX.writeFile(wb, EXCEL_FILE);
// }

// app.get('/', (req, res) => {
//   res.send('Backend Server is Running');
// });

app.get('/comments', (req, res) => {
  try {
    const comments = readComments();
    res.json(comments);
  } catch (err) {
    console.error("Error reading comments:", err);
    res.status(500).json({ error: "Failed to read comments" });
  }
});



app.post('/comments', (req, res) => {
  try {
    const newComment = req.body;
    const comments = readComments();
    
    if (newComment.id) {
      return res.status(400).json({ error: 'New comment should not have an id' });
    }

    const maxId = comments.reduce((max, c) => {
      const id = parseInt(c.id);
      return id > max ? id : max;
    }, 0);

    newComment.id = maxId + 1;
    comments.push(newComment);
    writeComments(comments);
    res.json(newComment);
  } catch (err) {
    console.error("Error in POST /comments:", err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.put('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedComment = req.body;
  const comments = readComments();
  const index = comments.findIndex(c => c.id === id);
  if (index !== -1) {
    comments[index] = updatedComment;
    writeComments(comments);
    res.json(updatedComment);
  } else {
    res.status(404).json({ error: 'Comment not found' });
  }
});

app.delete('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  let comments = readComments();
  comments = comments.filter(c => c.id !== id);
  writeComments(comments);
  res.json({ message: 'Deleted' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
