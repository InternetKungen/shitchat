//jwtUtils.js

import jwt from 'jsonwebtoken'; //npm install jsonwebtoken
import { readFileSync } from 'fs';

const mySecret = readFileSync("./src/config/secret.txt");

function generate(claims) {
  let options = {
    issuer: "chat-api",
    subject: "Auth token for chat api",
    expiresIn: "1h"
  }

  return jwt.sign(claims, mySecret, options);
}


function verify(token) {
  return jwt.verify(token, mySecret);
}


export default { generate, verify }