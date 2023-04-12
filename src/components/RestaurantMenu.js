import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurant = useRestaurant(resId);
  console.log(restaurant);
  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex m-4">
      <div>
        <h1 className="font-bold text-center text-4xl">Menu</h1>
        {Object.values(restaurant?.menu?.items).map((item) => (
          <li className="list-none" key={item.id}>
            <div className="bg-gray-50 shadow-gray-500 shadow-lg p-5 m-4">
              <img
              className="w-24 m-2"
                src={IMG_CDN_URL + item.cloudinaryImageId}
                alt="food image"
              />
              <p className="font-bold text-xl inline m-2">{item.name}-</p>
              <button
                className="p-1 bg-green-100"
                onClick={() => addFoodItem(item)}
              >
                Add
              </button>
              <p>{item.description}</p>
              <p>₹{item.price / 100}</p>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
