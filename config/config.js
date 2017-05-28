module.exports.elasticsearchConfig = {
  host: {
    host: 'localhost',
    port: '9200',
    headers: {
      'Access-Control-Allow-Headers': '*'
    }
  },
  httpAuth: 'elastic:changeme'
}
