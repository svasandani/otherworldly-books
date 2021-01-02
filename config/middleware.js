module.exports = {
  load: {
    before: ['cors'],
  },
  settings: {
    cors: {
      origin: ['http://localhost', 'https://otherworldly-books.netlify.app/'],
    },
  },
  };