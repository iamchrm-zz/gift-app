import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import PropTypes from "prop-types";
import { GiftGrid } from "./components/GiftGrid";
import HeartLogo from "./media/svg/heart.svg";
import GiftCart from "./components/GiftCart";
// const categories = [
//   'One Punch',
//   'Samurai',
//   'Dragon Ball'
// ]

function GiftExpertApp() {
  const [categories, setCategories] = useState([""]);
  const [heartAnim, setHeartAnim] = useState(false);
  const handleClickHeartLogo = () => {
    console.log("heart clicked");
  };

  const [showPanel, setShowPanel] = useState(false);

  const [cart, setCart] = useState([]);

  const onAdd = (item) => {
    const exist = setCart.find((i) => i.id === item.id);
  };

  return (
    <>
      <div className="grid grid-cols-2">
        <div className="grid justify-start">
          <h1 className="text-6xl   text-white pointer-events-auto transition ease-in hover:-translate-y-1 hover:scale-110">
            Gifs
          </h1>
        </div>
        <div className="grid justify-end">
          <div className="grid justify-items-center">
            <h1 className="text-white text-xl">My favorites</h1>
            <img
              src={HeartLogo}
              alt="Heart Logo"
              className={`${heartAnim && "animate-wiggle"} grid invert w-10`}
              onClick={() => {
                setHeartAnim(true);
                handleClickHeartLogo();
                setShowPanel(!showPanel);
              }}
              onAnimationEnd={() => setHeartAnim(false)}
            />
            {showPanel && <GiftCart cart={cart} />}
          </div>
        </div>
      </div>

      <AddCategory setCategories={setCategories} />

      <ol>
        {categories.map((category) => {
          return <GiftGrid key={category} category={category} />;
        })}
      </ol>
    </>
  );
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
export default GiftExpertApp;
