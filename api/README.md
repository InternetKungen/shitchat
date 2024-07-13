# **ShitChat** - Chat API

## Based On [_Chat API Version 1_](https://github.com/InternetKungen/chat-API_v1)

A simple Chat API with MongoDB integration for communication and data storage.

## Client

The socket.io client for Chat API can be found [here](https://github.com/InternetKungen/chat-API-http-chat)

## Installation

Installation can be done using npm:

```bash
npm install
```

### Database

_NOTE_: You'll have to set a path to your database in mongoDbClient.js. The database should have the collections _users_ and _channels_.

In src/config/ create _config.js_ with this information:

```javascript
export const dbDetails = {
  username: "username",
  password: "password",
};
```

## Usage

To run the chat API server, use the following command:

```bash
npm run dev
```

### Endpoints & syntax:

## Auth

### Login - _retrurns token_

**Metod:** POST

**URL:** http://localhost:3000/auth/login

**Body:** JSON

```json
{
  "username": "User",
  "password": "Password"
}
```

<br>

### Register - _Register username and password_

**Metod:** POST

**URL:** http://localhost:3000/auth/register

**Body:** JSON

```json
{
  "username": "User",
  "password": "Password"
}
```

<br>

## Broadcast

### Get messages from broadcast

**Metod:** GET

**URL:** http://localhost:3000/broadcast

<br>

### Create message in broadcast

**Metod:** POST

**URL:** http://localhost:3000/broadcast

**Body:** JSON

```json
{
  "message": "Broadcast message"
}
```

<br>

## Channels (Need login - Bearer token)

### Get all channels _(No login needed)_

**Metod:** GET

**URL:** http://localhost:3000/channel

<br>

### Create new channel

**Metod:** PUT

**URL:** http://localhost:3000/channel

**Body:** JSON

```json
{
  "channelName": "New channel",
  "description": "About channel",
  "messages": []
}
```

<br>

### Get all messages from specific channel

**Metod:** GET

**URL:** http://localhost:3000/channel/:id

<br>

### Create new message in specific channel

**Metod:** POST

**URL:** http://localhost:3000/channel/:id

**Body:** JSON

```json
{
  "message": "A new message"
}
```

<br>

### Remove channel

**Metod:** DELETE

**URL:** http://localhost:3000/channel/:id

# Description of Chat API Using bcrypt and JWT Tokens

## Encryption with bcrypt:

When a user registers in the system (in authController.js), bcrypt is used to securely store the user's password. This is done by hashing the password before it is saved in the database. This ensures that the user's password remains protected even if the database is compromised.

## Token Management with JWT:

After a user logs in (in authController.js), a JWT token is generated containing the user's information, such as username and role. This token is then sent back to the user and used to authenticate future API requests.

## Authentication with JWT:

To ensure that only authorized users can perform certain actions, the JWT token is checked in jwtFilter.js. For each protected endpoint (in channelRoutes.js), the authorize middleware function is used to verify the token's validity and the user's role. If the token is valid, the user is allowed to proceed; otherwise, an error message is returned.

## Summary

_bcrypt_: Used to securely hash and store user passwords during registration.
_JWT_: Used to generate tokens during login, which are then used for user authentication and authorization in API requests.
_Middleware_: JWT tokens are verified in middleware to protect API endpoints and ensure that only authorized users have access.
