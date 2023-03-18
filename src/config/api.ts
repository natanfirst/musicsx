import axios from 'axios';

const api = axios.create({
  baseURL: 'https://deezerdevs-deezer.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': '1cdf04bae4mshcb3ec2a3f96a24cp1303f8jsn79905a35216e',
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
  }
});

export default api;