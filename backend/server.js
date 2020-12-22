const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(bodyParser.json());


//connecting to Mongo
mongoose
    .connect(`mongodb+srv://nirasha:nirasha123@cluster1.hiiaf.mongodb.net/sample?retryWrites=true&w=majority`)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));
    
    const port  = process.env.PORT || 5000;


    app.listen(port, () => console.log('Server started on port ' +port));

// '/api/album' 
app.use('/api/album', require('./routes/albums'));

// '/api/genre' 
app.use('/api/genre', require('./routes/genres'));