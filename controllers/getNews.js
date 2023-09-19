import axios from 'axios';

export default async function getNews(req, res) {
    const topic = req.params.topic;
    axios.get(`https://newsapi.org/v2/everything?q=${topic}&apiKey=${process.env.KEY}`)
    .then(response => {
        console.log(response.data);
        res.send(response.data);
    })
};

