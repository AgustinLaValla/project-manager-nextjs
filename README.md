# Project Manager App

To run locally, run the following command:

```
docker-compose up -d
```

## Configure environment variables

Create .env file and set MONGO_DB variable like shown below:

```
MONGO_DB=mongodb://localhost:27017/entriesdb
```

Reinstall the node modules and run the app

```
yarn install
yarn run dev
```
