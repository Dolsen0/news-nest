import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import  getNews  from './controllers/getNews.js';
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
    });

app.get("/news/:topic", getNews);


app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
    });


