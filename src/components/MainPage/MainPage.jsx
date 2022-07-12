import React from "react";
import Advantages from "./Advantages/Advantages";
import Slider from "./Slider/Slider";
import TopCategories from "./TopCategories/TopCategories";
import DealOfDay from "./DealOfDay/DealOfDay";
import Bananas from "./Bananas/Bananas";
import ShopNow from "./ShopNow/ShopNow";
import BestSelling from "./BestSelling/BestSelling";
import Brands from "./Brands/Brands";

export default function MainPage({
  setBrowsShow,
  setFruitArr,
  fruitArr,
  setCartOpen,
  fruitObj,
  setSavedArr,
  savedArr,
  setQuickeOpen,
  quikArr,
  setQuikArr,
  addToCartHandler,
  setObj1
}) {
  return (
    <div>
      <Slider />
      <Advantages />
      <TopCategories setBrowsShow={setBrowsShow} />
      <DealOfDay
        fruitArr={fruitArr}
        setFruitArr={setFruitArr}
        setCartOpen={setCartOpen}
        addToCartHandler={addToCartHandler}
      />
      <Bananas
        fruitObj={fruitObj}
        setSavedArr={setSavedArr}
        savedArr={savedArr}
        setBrowsShow={setBrowsShow}
        setCartOpen={setCartOpen}
        setFruitArr={setFruitArr}
        fruitArr={fruitArr}
        setQuickeOpen={setQuickeOpen}
        quikArr={quikArr}
        setQuikArr={setQuikArr}
        addToCartHandler={addToCartHandler}
        setObj1={setObj1}
      />
      <ShopNow setBrowsShow={setBrowsShow} />
      <BestSelling
        setBrowsShow={setBrowsShow}
        quikArr={quikArr}
        setQuikArr={setQuikArr}
        setQuickeOpen={setQuickeOpen}
      />
      <Brands />
    </div>
  );
}
