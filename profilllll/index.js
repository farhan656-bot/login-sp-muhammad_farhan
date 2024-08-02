const express = require('express');
const path = require('path');

const app = express();
const port = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));



app.get('/auth/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});


app.post('/auth/login', (req, res) => {
  const { username, password } = req.body;
  
  
  if (username === 'farhan' && password === '2211522004') {
    
    res.redirect('/user/profile');
  } else {
    
    res.redirect('/auth/login');
  }
});

app.get('/user/profile', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'profile.html'));
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});