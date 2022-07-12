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

async function listLanguages() {
  const [languages] = await translate.getLanguages();

  console.log('Languages: ');
  languages.forEach(language => console.log(language));
}

async function translator() {
  // text will be equal to user input
  const text = 'redação';

  //  target will be equal to receiving user's selected preferred language
  const target = 'en'

  // async translation 
  const [translation] = await translate.translate(text, target);
  console.log(`Text: ${text}`);
  console.log(`Translation: ${translation}`);
}

// call the translator on load OR export
// translator();
listLanguages();

module.exports = translator;