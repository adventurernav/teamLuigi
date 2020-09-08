const baseURL = 'https://developers.zomato.com/api';
const key = 'c1a798197a2a8a052a4ea27bf049454a';


const fetchResults = () => {
    let url = `${baseURL}?api-key=${key}&location=${location}&q=${search}`;



    fetch(url)
    .then(res => res.json())
    .then(data => setZomato(data.response.docs))
    .catch(err => console.log(err));
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchResults();
  };
 