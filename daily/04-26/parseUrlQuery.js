/*
URL Query Parser

Given a URL that contains a query string, parse the query string into an object (or dictionary) of key-value pairs.
  - The query string begins after the "?",
  - each parameter is separated by "&",
  - each key/value pair is separated by "="
*/

function parseUrlQuery(url) {
  const match = url.match(/(?:\?)(.*)/);
  if (!match) return {};
  
  return match[1]
    .split("&")
    .reduce((acc, pair) => {
      const [key, value] = pair.split("=");
      if(key) acc[key] = value;
    
      return acc;
    }, {});
}

parseUrlQuery("https://example.com/search?name=Alice&age=30");
// return: { name: 'Alice', age: '30' }
