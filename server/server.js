const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://gql:Albert86@ds261040.mlab.com:61040/gql-test');
mongoose.connection.once('open', () => {
    console.log('connected to database');
});

// Express instance
var app = express();

// Allow Cross origin
app.use(cors());

// Allow GraphQl Queries
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
