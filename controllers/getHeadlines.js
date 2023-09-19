import axios from 'axios';

export default async function getHeadlines(req, res) {
    const country = req.params.country;
    axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.KEY}`)
    .then(response => {
        console.log(response.data);
        res.send(response.data);
    })
};

