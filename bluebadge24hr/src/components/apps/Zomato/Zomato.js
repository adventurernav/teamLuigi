import React from 'react';
// import ZomatoResults from './ZomatoResults';


const Zomato = (props) => {
    // const [results, setResults] = useState([]);
    // console.log(results);
    // const fetchResults = () => {
  fetch('https://developers.zomato.com/api/v2.1/geocode?lat=39.908147199999995&lon=-86.1831168',{
    method: 'GET',
    headers: new Headers ({
      'Content-Type': 'application/json',
      'user-key': 'c1a798197a2a8a052a4ea27bf049454a'
    })

  })   
  .then(res => res.json())
  .then(data => console.log('this is the data', data))

  .catch(err => console.log(err))
  return (<div>ZomatoApp</div>)  
}
// fetchResults();




  export default Zomato;


