const express = require('express');

const app = express()


app.get('/teste', (res, res) => {
    return res.json({ heloo: 'world' })
});

app.listen(3333);