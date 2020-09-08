const baseURL = 'https://developers.zomato.com/api';
const key = 'c1a798197a2a8a052a4ea27bf049454a';


const fetchResults = () => {
    let url = `${baseURL}?api-key=${key}&location=${location}&q=${search}`;