const {Client} = require('pg');
const QueryStream = require('pg-query-stream');
const urlParse = require('url-parse');

function createPgClient(dbConfig) {
    const dbUrl = urlParse(dbConfig.postgres);
    console.log('dbUrl', dbUrl);

    const pgClient = new Client({
        user: 'postgres', //dbUrl.username,
        host: 'localhost', //dbUrl.hostname,
        database: 'view_estate', //dbUrl.pathname.substr(1),
        port: '5432', //dbUrl.port
    })
}