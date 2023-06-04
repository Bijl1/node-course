const Postman = require('./postman-sdk.js');

const postman = new Postman(
  process.env.POSTMAN_API_KEY,
  process.env.POSTMAN_WORKSPACE_ID
);

(async() => {
  try {
    const me = await postman.get('me');
    console.log(me);
  } catch (err) {
    console.error(err);
  }
})();