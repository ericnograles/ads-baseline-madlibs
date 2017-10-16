require('dotenv').config();
const r2 = require('r2');

async function getFacebookMe() {
  let facebookMeUrl = `https://graph.facebook.com/v2.10/me?fields=id%2Cname&access_token=${process.env.FACEBOOK_API_TOKEN}`;
  console.log(`Calling out to ${facebookMeUrl}`);
  let response = JSON.parse(await r2(facebookMeUrl).text);
  console.log(response);
}

getFacebookMe();


