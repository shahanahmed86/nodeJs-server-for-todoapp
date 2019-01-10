const express = require('express');
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

const todos = [];

app.get('/api/todos', (req, res) => {
    res.send(todos);
});

app.post('/api/todos', (req, res) => {
    todos.push(req.body)
    res.send('Success');
})

app.put('/api/todos/:id', (req, res) => {
    const ind = todos.findIndex(val => val.id == req.params.id);
    todos.splice(ind, 1, req.body);
    res.send('Edited Successfully');
})

app.delete('/api/todos/:id', (req, res) => {
    const ind = todos.findIndex(val => val.id == req.params.id);
    todos.splice(ind, 1);
    res.send('Deleted Successfully');
})

module.exports = app;