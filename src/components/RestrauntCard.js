import { IMG_CDN_URL } from "../config";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
  address,
}) => {
  const { user } = useContext(UserContext);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem("grapes"));
  };
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="pizza" />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString}</h4>
    </div>
  );
};

export default RestrauntCard;
