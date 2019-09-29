const uuid = require('uuid/v4');
const Pool = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'view_estate',
    port: 5432
})

const createPost = async (req, res) => {
    const {title, address, price, image, description} = req.body;
    await pool.query(`INSERT INTO posts (title, address, price, image, description) VALUES (${title}, ${address}, ${price}, ${image}, ${description}`, [title, address, price, image, description], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).send(`Successfully created a new post ${results}`);
    });
};

const getPost = async (req, res) => {
    const id = req.params.id;
    await pool.query(`SELECT * FROM posts WHERE id=${id}`, [id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results);
    });
};

const updatePost = async (req, res) => {
    const id = req.params.id;
    const {title, address, price, image, description} = req.body;
    await pool.query(`UPDATE posts SET title='${title}', address='${address}', price='${price}', image='${image}', description='${description}' WHERE id=${id}`, [id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(`successfully modified ${id}`);
    });

};

const deletePost = async (req, res) => {
    const id = req.params.id;
    await pool.query(`DELETE FROM posts WHERE id=${id}`, [id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).send(`Successfully deleted ${id}`);
    });

};

module.exports = {
    createPost,
    getPost,
    updatePost,
    deletePost
};