const express = require('express');
const mongoose= require('mongoose');
const dotenv= require('dotenv');
const helmet= require('helmet');
const rateLimit= require('express-rate-limit');
const loginRouter= require('./routes/loginRouter');

dotenv.config();

const app= express();
app.use(express.json());
app.use(helmet());

app.use(rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
}));


app.use('/api', loginRouter);

const PORT = process.env.PORT || 3000;
const uri = process.env.MONGODB_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

app.listen(3001);