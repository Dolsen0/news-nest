import axios from 'axios';

export default async function getSources(req, res) {
    axios.get(`https://newsapi.org/v2/top-headlines/sources?&apiKey=${process.env.KEY}`)
    .then(response => {
        console.log(response.data);
        res.send(response.data);
    })
};
