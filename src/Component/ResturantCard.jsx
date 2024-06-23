import React from "react";
import mockData from "./mockData";
const ResturantCard = (props)=>{
    const {resData} = props;
    // const {cloudinaryImageId,name, avgRatingString,cuisines,costForTwo,deliveryTime} =resData
     return(
      <div className='res-card' style={{backgroundColor:"#f0f0f0"}}>
      <img className='res-logo' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ resData.info.cloudinaryImageId} />
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>{resData.info.avgRatingString} </h4>
      <h4>{resData.info.deliveryTime}</h4>
  
      </div>
     )
  };
  
 
  export default ResturantCard;