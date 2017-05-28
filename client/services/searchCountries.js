import elasticsearch from 'elasticsearch';
import { elasticsearchConfig } from '../../config/config';
const client = new elasticsearch.Client(elasticsearchConfig);

export default function searchCountries(query) {
  const cleanQuery = query.replace(/[\W_]+/g,'');
  return client.search({
    index: 'countries',
    body: {
      suggest: {
        name_suggest: {
          text: cleanQuery,
          completion: {
            field: 'name_suggest'
          }
        }
      }
    }
  });
}
