import axios from 'axios';

export default async function getCategory(req, res) {
    const category = req.params.category;
    axios.get(`https://newsapi.org/v2/top-headlines/sources?category=${category}&apiKey=${process.env.KEY}`)
    .then(response => {
        console.log(response.data);
        res.send(response.data);
    })
};
