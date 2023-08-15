const dotenv = require("dotenv");
const path = require("path");

/* Loading the environment variables from the env file. */
dotenv.config({
  path: "./development.env",
});

/* A way to store all the environment variables in one place. */
const APP_CONFIGS = {
  API_VERSION: process.env.API_VERSION,
  APP_PORT: process.env.APP_PORT,
  APP_ENV: process.env.NODE_ENV,
  APP_SECRET: process.env.APP_SECRET,
  TOKEN_LIFE: process.env.TOKEN_LIFE,
};

module.exports = APP_CONFIGS;
