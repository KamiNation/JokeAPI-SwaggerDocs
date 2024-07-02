// import package statement
import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import dotenv from "dotenv"
import methodOverride from "method-override"
import { route } from "./server/routes/route.js";
import { fileURLToPath } from "url";
import path from 'path'
import cors from "cors"

// import custom files
import {notFound } from "../JokeAPI+SwaggerDocs/server/controllers/controller.js"
import swaggerDocs from "./swagger.js";



// Initialization 
const server = express();
dotenv.config({path: 'info.env'})
const masterKey = process.env.MASTER_KEY;

// middleware
// server.use(methodOverride('_method'));
server.use(cors())
// server.use(methodOverride('X-HTTP-Method-Override'));
// server.use(methodOverride('_method'));
server.use(express.json())
server.use(bodyParser.urlencoded({ extended: true }));
server.use(morgan("tiny"))


// Resolve the path to the "public" directory
// const publicPath = path.join(fileURLToPath(import.meta.url), "../public")
// console.log(typeof publicPath);
// console.log(publicPath);
server.use(express.static("public"))



// Resolve the path to the 'views' directory
const viewsPath = path.resolve(fileURLToPath(import.meta.url), "../views")
server.set('views', viewsPath)

// Seting up views engine
server.set("view engine", "ejs");



const PORT = process.env.PORT || 4000
route(server)
swaggerDocs(server, PORT)


server.use(notFound)

server.listen(PORT, () => {
  console.log(`Successfully started server on http://localhost:${PORT}/jokeapi/docs`);
});
