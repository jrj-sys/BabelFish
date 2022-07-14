// require Google Cloud Translation API 
const { Translate } = require('@google-cloud/translate').v2;
// dotenv for env variables
require('dotenv').config();

// parse env CREDENTIALS for authorization on Translate instantiation 
const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);

// instantiate a new Translate object
const translate = new Translate({
  credentials: CREDENTIALS,
  projectId: CREDENTIALS.projectId});


async function translator(text, target) {
  // async translation ........ text = user message, target = user preferredLang
  const translation = await translate.translate(text, target);
  // take the 0th index because the translate API returns an object and React doesn't like that
  console.log(`Text: ${text}`);
  console.log(`Translation: ${translation[0]}`);

  return translation[0];
}

// call the translator on load OR export
// translator();

module.exports = translator;