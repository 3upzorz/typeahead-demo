const elasticsearch = require('elasticsearch');
const { elasticsearchConfig } = require('../config/config');
const countries = require('../data/countries.json');

const client = new elasticsearch.Client(elasticsearchConfig);
// elasticsearch only supports up to 200 create actions per batch by default
const elasticsearchBatchMax = 200;

const firstBatch = countries.slice(0, elasticsearchBatchMax).map((country, arrayIndex) => {
  return client.create({
    index: 'countries',
    type: 'country',
    timeout: '5m',
    id: arrayIndex,
    body: {
      name: country,
      name_suggest: country.replace(/[\W_]+/g,'')
    }
  });
});

Promise.all(firstBatch)
       .then((res) => {
         const secondBatch = countries.slice(elasticsearchBatchMax).map((country, arrayIndex) => {
           return client.create({
             index: 'countries',
             type: 'country',
             timeout: '5m',
             id: arrayIndex + 200,
             body: {
               name: country,
               name_suggest: country.replace(/[\W_]+/g,'')
             }
           });
         });
         Promise.all(secondBatch)
                .then(console.log)
                .catch(console.error)
       })
       .catch(console.error)
