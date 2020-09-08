


const [food, setFood]


const fetchFood = () => {
  // let lat = '41.5531080000'
  // let lon = '-8.4211480000'
    fetch(`https://developers.zomato.com/api/v2.1/geocode?lat=${lat}&lon=${lon}`,{
      method: 'GET',
      headers: new Headers ({
        'Content-Type': 'application/json',
        'user-key': 'c1a798197a2a8a052a4ea27bf049454a'
    })

    .then(res => res.json())
    .then(data => {
      setFood(data.response.docs)
      // console.log(data)
    .catch(err => console.log(err));
    })

    })
  }

  export default Zomato