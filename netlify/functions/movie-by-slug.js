const movies = require('./data.json');

exports.handler = async (event) => {
  const slug = event.path.replace('/api/movies/', '');
  const movie = movies.find((m) => m.slug === slug);

  return {
    statusCode: 200,
    body: JSON.stringify(movie),
  };
};
