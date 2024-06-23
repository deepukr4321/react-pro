import React, { useEffect, useState } from 'react';
import mockData from './mockData';
import ResturantCard from './ResturantCard';

function Body()  {
  const [top, setTop] = useState(mockData);
  const [search, setSearch] = useState("")
  const [filterRestro, setFilterRestro] = useState(mockData)


//   useEffect(()=>{
//     fetchData(); 
//  },[0])
 
//   const fetchData= async ()=> {
//     const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=12.96340&lng=77.58550");
//     const json = await data.json();
//     setTop(json.data.success.cards[4].gridWidget.gridElements.infoWithStyle.restaurants);
//   }

 

  const filter = ()=>{
     const result = top.filter((res)=>{
         return res.info.avgRatingString >4.5;
     } )
      setTop(result)
    } 


  return (
    <>

<div className='btn-box'>
<div className='search'>
  <input type="text" className='search-box' 
    value={search}
    onChange={(e) =>{setSearch(e.target.value)}}
    
  />
  <button className=' btn btn2'
  onClick={()=>{
    console.log(search)
    const filterRes = top.filter((res)=>{
      // return res.info.name.includes(search)
      return res.info.name.toLowerCase().includes(search.toLowerCase())
    })
    setTop(filterRes);
  }}
  >search</button>
</div>
<div className='filter'> <button onClick={filter} className='btn'>Top Rated Restro</button></div>

</div>
<div className='restrocard'>
{
  top.map((item) =>(
    <ResturantCard key={item.info.id} resData={item} />
  ))
}
</div>
</>
  )
}


export default Body;
