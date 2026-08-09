const express = require('express');
const http = require('http');
const path = require('path');
const { uvPath } = require('./lib/index.cjs'); // This imports your current files!

const app = express();
const server = http.createServer(app);

// Serve your custom website files
app.use(express.static(path.join(__dirname, 'public')));

// Link the Ultraviolet proxy scripts to the server
app.use('/uv/', express.static(uvPath));

// Tell the server to look for Railway's port variable
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
