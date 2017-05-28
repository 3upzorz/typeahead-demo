const elasticsearch = require('elasticsearch');
const { elasticsearchConfig } = require('../config/config');
const countries = require('../data/countries.json');

const client = new elasticsearch.Client(elasticsearchConfig);

client.bulk({
  body: countries.reduce((commands, country, arrayIndex) => {
    commands.push(
      {
        index: {
          _index: 'countries',
          _type: 'country',
          _id: arrayIndex
        }
      },
      {
        name: country,
        name_suggest: country.replace(/[\W_]+/g,'')
      }
    );
    return commands;
  }, [])
})
.then(console.log)
.catch(console.error);
