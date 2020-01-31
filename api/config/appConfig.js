const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");
const logger = require("morgan");
require("dotenv").config();

module.exports = app => {
  app.use(logger("dev"));
  app.use(helmet());
  app.use(express.json());
  app.use(cors());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.static(path.join(__dirname, "public")));
};
