const express = require('express');

//create express app
const app = express();

//create a PORT variable
const PORT = process.env.PORT || 3001;

//set up express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const apiRoutes = require('./routes/api.js');
app.use(apiRoutes);
const htmlRoutes = require('./routes/html');
app.use(htmlRoutes);

//create server listener
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}/`));