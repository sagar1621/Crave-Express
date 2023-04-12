import { RestrauntList } from "../config";
import RestrauntCard from "./RestrauntCard";
import { useState, useEffect,useContext } from "react";
import UserContext from "../utils/UserContext";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";


const Body = () => {
const [allRestraunt,setAllRestraunt]=useState([]);
const [filteredRestraunt,setFilteredRestraunt]=useState([]);
const [searchText,setSearchText]=useState();

useEffect(()=>{
      getRestraunt();
}, [])

const isOnline=useOnline();
const {user,setUser}=useContext(UserContext);



async function getRestraunt(){
  const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
  const json=await data.json();
  console.log(json);
  setAllRestraunt(json?.data?.cards[2]?.data?.data?.cards);
  setFilteredRestraunt(json?.data?.cards[2]?.data?.data?.cards);
}

if(!isOnline){
  return <h1>Offline, Please Check Your Intenet</h1>
}

if(!allRestraunt) return null;


  return (allRestraunt?.length===0)? <Shimmer/> : (
    <div className="min-h-screen">
      <div className="search-container p-5 bg-pink-50 my-5">
        <input
          type="text"
          className="p-2 m-2 focus:bg-green-50"
          placeholder="Search"
          value={searchText}
          onChange={(e)=>{setSearchText(e.target.value)}}
        />
        <button className="p-2 m-2 rounded-md text-white bg-purple-900 hover:bg-purple-700" onClick={()=>{
           const data= filterData(searchText,allRestraunt);
           setFilteredRestraunt(data);
        }}>Search</button>
        {/* <input value={user.name} onChange={e=>setUser({
          ...user,
          name:e.target.value,
         
        })
        }></input>
        <input value={user.email} onChange={e=>setUser({
          ...user,
          email:e.target.value,
        })
        }></input> */}
      </div>
      <div className="flex flex-wrap">
        {
          filteredRestraunt.map((restraunt) => {
          return <Link to={"restaurant/"+restraunt.data.id} key={restraunt.data.id}> <RestrauntCard {...restraunt.data}  /></Link>;
        })}
      </div>
    </div>
  );
};

export default Body;
