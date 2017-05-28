const express = require('express');
// const elasticsearch = require('elasticsearch');
// const countries = '../data/countries';
//
// const client = new elasticsearch.Client({
//   host: {
//     host: 'localhost',
//     port: '9200'
//   },
//   httpAuth: 'elastic:changeme'
// })
//
// const createPromises = countries.map((country, arrIndex) => {
//   return client.create({
//     index: 'countries',
//     type: 'country',
//     id: arrIndex,
//     body: {
//       name: country
//     }
//   });
// });
//
// Promise.all(createPromises).then(console.log);

const app = express();

app.use(express.static('dist'));

app.listen(3000, () => {
  console.log('listening on port 3000');
});
