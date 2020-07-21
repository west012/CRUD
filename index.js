const express = require('express')
const bodyParser = require('body-parser');
const db = require ('./queries');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.get('/',(request, response) =>{
    response.json({ info: 'Node.js, Express, and Postgres API'})
});

app.get('/library', db.getBooks);
app.get('/library/:id', db.getBooksById);
app.post('/library', db.addEntry);
app.put('/library/:id', db.updateStatus);
app.delete('/library/:id', db.deleteEntry);

app.listen(port, () => {
    console.log(`App running on port ${port}`)
});