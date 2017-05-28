const elasticsearch = require('elasticsearch');
const { elasticsearchConfig } = require('../config/config');

const client = new elasticsearch.Client(elasticsearchConfig);
const createPromise = () => {
  return client.indices.create({
    index: 'countries',
    body: {
      mappings: {
        country : {
            properties : {
              name : {
                type : 'text'
              },
              name_suggest : {
                type: 'completion'
              }
          }
        }
      }
    }
  })
}

client.indices.exists({
  index: 'countries'
})
.then((exists) => {
  if (exists) {
    return client.indices.delete({
      index: 'countries'
    }).then(createPromise);
  }
  return createPromise();
})
.then(console.log)
.catch(console.error);
