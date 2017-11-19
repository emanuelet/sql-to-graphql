var restify = require('restify')
var graphqlHTTP = require('express-graphql')
var schema = require('./schema')

var app = restify.createServer();
var port = process.env.PORT || 4000;

app.post('graphql', graphqlHTTP({
    schema: schema,
    graphiql: false
}))

app.get('/graphql', graphqlHTTP({
  schema: schema,
  graphiql:  true,
}));

app.listen(port, function() {
    console.log('Running a GraphQL API server at localhost:<port>/graphql.');
    console.log('Listening on port: ' + port);
});
