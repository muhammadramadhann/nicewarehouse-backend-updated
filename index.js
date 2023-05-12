const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const cors = require('cors');
require('dotenv').config();
const ProductRoute = require('./routes/ProductRoute');

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(express.static('public'));

mongoose.connect(`${process.env.MONGODB_URI}`)
    .then(() => console.log('Database is connected'))
    .catch(err => console.log(err));

app.use('/products', ProductRoute);

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));