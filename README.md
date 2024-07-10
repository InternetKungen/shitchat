# ShitChat

## Docker-compose - combinds [Chat_API](https://github.com/InternetKungen/chat-API_v1) + [http-chat](https://github.com/InternetKungen/chat-API-http-chat) + local mongodb

## Info

This App is made for training and is not secure. Usually the docker containers are connected through its own network, but I couldn't get it to work for me, so this version is connected with external ports, which can all be public.

## Installation

Download:

```bash
git clone <source>.git
```

GOTO DIR:

```bash
cd shitchat
```

### Edit sources

#### /shitchat/docker-compose.yml

MongoDB Settings:

```bash
    mongodb:
        ports:
            - "27017:27017"
        environment:
            - MONGO_INITDB_ROOT_USERNAME=mongodb_admin_username
            - MONGO_INITDB_ROOT_PASSWORD=mongodb_admin_password
```

Chat API settings:

DB_HOST - is the mongodb-server

```bash
    api:
        ports:
            - "3000:3000"
        environment:
            - PORT=3000
            - DB_USERNAME=mongodb_admin_username
            - DB_PASSWORD=mongodb_admin_password
            - DB_NAME=shitchat
            - DB_HOST=192.168.0.25:27017
```

Client settings:

EXTERNAL_API_URI - is the api-server

```bash
    client:
        ports:
            - "4000:4000"
        environment:
            - PORT=4000
            - EXTERNAL_API_URI=http://192.168.0.25:3000
```

### Edit Client /client/static/index.js

Change this line to API SERVER

```bash
//API SERVER
const apiUrl = "http://192.168.0.25:3000";
```

### Create .env-files

#### /shitchat/api/.env

```bash
PORT=3000
DB_USERNAME=mongodb_admin_username
DB_PASSWORD=mongodb_admin_password
DB_NAME=shitchat
DB_HOST=192.168.0.25:27017
```

#### /shitchat/client/.env

```bash
PORT=4000
EXTERNAL_API_URI=http://192.168.0.25:3000
```

### Create these files

#### /shitchat/api/src/config/config.js

```bash
import dotenv from 'dotenv';

dotenv.config();

  export const dbDetails = {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME
  };
```

#### /shitchat/api/src/config/secret.txt

write a secret word or sentence used for encryption in this file

### Install with docker

Install docker and then run app.

```bash
sudo docker-compose up --build
```
