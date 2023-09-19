import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import  getNews  from './controllers/getNews.js';
import  getHeadlines  from './controllers/getHeadlines.js';
import getSources  from './controllers/getSources.js';
import getCategory from "./controllers/getCategory.js";

const app = express();

app.get('/', (req, res) => {
    res.send('please visit: /news/:topic or /headline/:country');
    });

app.get("/news/:topic", getNews);

app.get("/headlines/:country", getHeadlines);    

app.get("/sources", getSources);

app.get("/sources/:category", getCategory);

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
    });



