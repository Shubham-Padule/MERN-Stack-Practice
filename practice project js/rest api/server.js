const http = require('http');
const url = require('url');
const fs = require('fs');

// In-memory data store (for demonstration purposes)
let items = [];

const server = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url, true);
    const path = reqUrl.pathname;
    const queryParams = reqUrl.query;

    if (req.method === 'GET' && path === '/api/items') {
        // Return the list of items
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(items));
    } else if (req.method === 'POST' && path === '/api/items') {
        // Add a new item
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const newItem = JSON.parse(body);
            items.push(newItem);
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(newItem));
        });
    } else if (req.method === 'PUT' && path.startsWith('/api/items/')) {
        // Update an existing item
        const itemId = parseInt(path.substring('/api/items/'.length));
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const updatedItem = JSON.parse(body);
            const index = items.findIndex(item => item.id === itemId);
            if (index !== -1) {
                items[index] = { id: itemId, ...updatedItem };
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(items[index]));
            } else {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Item not found' }));
            }
        });
    } else if (req.method === 'DELETE' && path.startsWith('/api/items/')) {
        // Delete an item
        const itemId = parseInt(path.substring('/api/items/'.length));
        const index = items.findIndex(item => item.id === itemId);
        if (index !== -1) {
            items.splice(index, 1);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Item deleted' }));
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Item not found' }));
        }
    } else {
        // Serve HTML page
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
