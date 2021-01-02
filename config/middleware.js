module.exports = {
  load: {
    before: ['cors'],
  },
  settings: {
    cors: {
      enabled: true,
      origin: ['http://localhost', 'https://otherworldly-books.netlify.app/'],
    },
  },
  };