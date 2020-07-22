const Pool = require('pg').Pool;
//create pool to require postgres

const pool =new Pool({
    user: 'postgres',
    host:'database-1.ccsht2sj640l.us-west-2.rds.amazonaws.com',
    database: 'book',
    password: ' ',
    port: 5432
})
// connects pool to postgres DB

const getBooks = (request, response) => {
    pool.query ('SELECT * FROM library ORDER by id DESC', (error, result) => {
        if(error){
            throw error;
        }
        response.status(200).json(result.rows)
    })
}

const getBooksById = (request, response) => {
    const id = parseInt(request.params.id);
    pool.query('SELECT * FROM library WHERE id = $1', [id], (error, result) => {
        if (error){
            throw error;
        }
        response.status(200).json(result.rows)
    })
}

const addEntry = (request, response) => {
    const {title, author, year} = request.body

    pool.query ('INSERT INTO library (title, author, year) VALUES ($1, $2, $3)', [title, author, year], (error, result) => {
        if(error){
            throw error;
        }
        response.status(201).send(`Textbook added with year published: ${year}`);
    })
}

const updateStatus = (request, response) => {
    const id = parseInt(request.params.id);
    const {title, author, year} = request.body;

    pool.query('UPDATE library SET title = $1, author = $2, year = $3 WHERE id = $4', [title, author, year, id], (error, result) => {
        if (error){
            throw error;
        }
        response.status(200).send(`Textbook modified with ID: ${id}`);
    })
}

const deleteEntry = (request, response) =>{
    const id = parseInt(request.params.id);

    pool.query('DELETE FROM library WHERE id = $1', [id], (error, result) =>{
        if(error){
            throw error;
        }
        response.status(200).send(`Textbook deleted with ID: ${id}`);
    })
}

module.exports = {
    getBooks,
    getBooksById,
    addEntry,
    updateStatus,
    deleteEntry
}