import React from 'react';




// const [food, setFood]


https://developers.zomato.com/api/v2.1/geocode?lat=39.791000&lon=-86.148003

const fetchFood = (props) => {

    fetch(`https://developers.zomato.com/api/v2.1/geocode?lat=${props.lat}&lon=${props.lon}`,{
      method: 'GET',
      headers: new Headers ({
        'Content-Type': 'application/json',
        'user-key': 'c1a798197a2a8a052a4ea27bf049454a'
    })

    .then(res => res.json())
    .then(data => {
      // setFood(data.response.docs)
      console.log(data);
    })
    .catch(err => console.log(err))
  }

  //   const foodMapper = () => {
  //     return nearby_restaurants.map((name, cuisine) => {
  //       return(
  //         <div>
  //         <h3>Nearby Restaurants</h3>
  //         <hr/>
  //         <Table>
  //             <thead>
  //                 <tr>
  //                     <th>{nearby_restaurants.name}</th>
  //                     <th>{nearby_restaurants.address}</th>
  //                 </tr>
  //             </thead>
  //             <tbody>
  //             {restaurantMapper()}
  //             </tbody>
  //         </Table>
  //         <div/>
  //       )
  //     }
  //   }

    
  // }
}

  export default Zomato;