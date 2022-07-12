import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import BackDrop from "./components/BackDrop/BackDrop";
import Footer from "./components/Foote/Footer";
import EachFruit from "./components/Fruits/Fruit/EachFruit/EachFruit";
import Fruits from "./components/Fruits/Fruits";
import Header from "./components/Header/Header";
import LeftBottomFixed from "./components/LeftBottomFixed/LeftBottomFixed";
import MainPage from "./components/MainPage/MainPage";
import MyCartFixed from "./components/MyCartFixed/MyCartFixed";
import Navbar from "./components/Navbar/Navbar";
import NavTop from "./components/NavTop/NavTop";
import RightBottomFixed from "./components/RightBottomFixed/RightBottomFixed";
import Vegetables from "./components/Vegetables/Vegetables";
import { fruitObj } from "./Objects/FruitObj/FruitObj";
import { recommended } from "./Recommend";
import { obj } from "./Новая папка (2)/obj";
import EachVegetable from "./components/Vegetables/Vegetable/EachVegetable/EachVegetable";
import Milks from "./components/Milks/Milks";
import EachMilk from "./components/Milks/Milk/EachMilk/EachMilk";
import Bananas from "./components/Bananas/Bananas";
import EachBanana from "./components/Bananas/Banana/EachBanana/EachBanana";
import Fishes from "./components/Fishes/Fishes";
import Butters from "./components/Butters/Butters";
import EachButter from "./components/Butters/Butter/EachButter/EachButter";
import Trees from "./components/Trees/Trees";
import EachTree from "./components/Trees/Tree/EachTree/EachTree";
import Nuts from "./components/Nuts/Nuts";
import EachNut from "./components/Nuts/Nut/EachNut/EachNut";
import NoProducts from "./components/NoProducts/NoProducts";
import SavedFixed from "./components/SavedFixed/SavedFixed";
import QuickView from "./components/QuickeView/QuickeView";
import ScrollToTop from "./components/ScrollToTop";
import CompareFixed from "./components/CompareFixed/CompareFixed";

function App() {
  const [browsShow, setBrowsShow] = useState(true);
  const [cartOpen, setCartOpen] = useState(false);
  const [savedOpen, setSavedOpen] = useState(false);
  const [quickOpen, setQuickeOpen] = useState(false);
  const [compareOpen, setCompareOpen] = useState(false);

  const [quikArr, setQuikArr] = useState([]);
  const [fruitArr, setFruitArr] = useState([]);
  const [savedArr, setSavedArr] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);

  const [arrFr, setArrFr] = useState(fruitObj);
  const [obj1, setObj1] = useState(obj);

  const [demoUse, setDemoUse] = useState(false);

  useEffect(() => {
    setBrowsShow(true);
  }, []);

  const addToCartHandler = (obj) => {
    setCartOpen(true);
    if (fruitArr.indexOf(obj) !== -1) return;
    setFruitArr([obj, ...fruitArr]);
  };
  return (
    <div className="App">
      <Header />
      <NavTop
        setBrowsShow={setBrowsShow}
        fruitArr={fruitArr}
        setCartOpen={setCartOpen}
        setSavedOpen={setSavedOpen}
        savedArr={savedArr}
        setCompareOpen={setCompareOpen}
      />
      <Navbar browsShow={browsShow} setBrowsShow={setBrowsShow} />
      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              fruitArr={fruitArr}
              setFruitArr={setFruitArr}
              setBrowsShow={setBrowsShow}
              setCartOpen={setCartOpen}
              fruitObj={obj1}
              setObj1={setObj1}
              savedArr={savedArr}
              setSavedArr={setSavedArr}
              setQuickeOpen={setQuickeOpen}
              setQuikArr={setQuikArr}
              quikArr={quikArr}
              addToCartHandler={addToCartHandler}
            />
          }
        />
        <Route
          path="/milks"
          element={
            <Milks
              savedArr={savedArr}
              setSavedArr={setSavedArr}
              fruitObj={obj1}
              setObj1={setObj1}
              recommended={recommended}
              setCartOpen={setCartOpen}
              fruitArr={fruitArr}
              setFruitArr={setFruitArr}
              setQuickeOpen={setQuickeOpen}
              setQuikArr={setQuikArr}
              addToCartHandler={addToCartHandler}
            />
          }
        />
        <Route
          path="/fruits"
          element={
            <Fruits
              savedArr={savedArr}
              setSavedArr={setSavedArr}
              fruitObj={obj1}
              recommended={recommended}
              setCartOpen={setCartOpen}
              fruitArr={fruitArr}
              setFruitArr={setFruitArr}
              setQuickeOpen={setQuickeOpen}
              setQuikArr={setQuikArr}
              addToCartHandler={addToCartHandler}
              setObj1={setObj1}
            />
          }
        />
        <Route
          path="/vegetables"
          element={
            <Vegetables
              savedArr={savedArr}
              setSavedArr={setSavedArr}
              fruitObj={obj1}
              recommended={recommended}
              setCartOpen={setCartOpen}
              fruitArr={fruitArr}
              setFruitArr={setFruitArr}
              setQuickeOpen={setQuickeOpen}
              setQuikArr={setQuikArr}
              addToCartHandler={addToCartHandler}
              setObj1={setObj1}
            />
          }
        />

        <Route
          path="/bananas"
          element={
            <Bananas
              savedArr={savedArr}
              setSavedArr={setSavedArr}
              fruitObj={obj1}
              recommended={recommended}
              setCartOpen={setCartOpen}
              fruitArr={fruitArr}
              setFruitArr={setFruitArr}
              setQuickeOpen={setQuickeOpen}
              setQuikArr={setQuikArr}
              addToCartHandler={addToCartHandler}
              setObj1={setObj1}
            />
          }
        />

        <Route
          path="/fish"
          element={
            <Fishes
              savedArr={savedArr}
              setSavedArr={setSavedArr}
              recommended={recommended}
              setCartOpen={setCartOpen}
              fruitArr={fruitArr}
              setFruitArr={setFruitArr}
              setQuickeOpen={setQuickeOpen}
              setQuikArr={setQuikArr}
              addToCartHandler={addToCartHandler}
              fruitObj={obj1}
              setObj1={setObj1}
            />
          }
        />

        <Route
          path="/butters"
          element={
            <Butters
              savedArr={savedArr}
              setSavedArr={setSavedArr}
              fruitObj={obj1}
              recommended={recommended}
              setCartOpen={setCartOpen}
              fruitArr={fruitArr}
              setFruitArr={setFruitArr}
              setQuickeOpen={setQuickeOpen}
              setQuikArr={setQuikArr}
              addToCartHandler={addToCartHandler}
              setObj1={setObj1}
            />
          }
        />

        <Route
          path="/trees"
          element={
            <Trees
              savedArr={savedArr}
              setSavedArr={setSavedArr}
              fruitObj={obj1}
              recommended={recommended}
              setCartOpen={setCartOpen}
              fruitArr={fruitArr}
              setFruitArr={setFruitArr}
              setQuickeOpen={setQuickeOpen}
              setQuikArr={setQuikArr}
              addToCartHandler={addToCartHandler}
              setObj1={setObj1}
            />
          }
        />

        <Route
          path="/nuts"
          element={
            <Nuts
              savedArr={savedArr}
              setSavedArr={setSavedArr}
              fruitObj={obj1}
              recommended={recommended}
              setCartOpen={setCartOpen}
              fruitArr={fruitArr}
              setFruitArr={setFruitArr}
              setQuickeOpen={setQuickeOpen}
              setQuikArr={setQuikArr}
              addToCartHandler={addToCartHandler}
              setObj1={setObj1}
            />
          }
        />

        <Route path="/no-products" element={<NoProducts />} />

        {/* ? Milk Desc */}
        <Route
          path="/Milks/:id"
          element={
            <EachMilk
              setFruitArr={setFruitArr}
              setCartOpen={setCartOpen}
              fruitArr={fruitArr}
              addToCartHandler={addToCartHandler}
              setObj1={setObj1}
              fruitObj={obj1}
              savedArr={savedArr}
              setSavedArr={setSavedArr}
            />
          }
        />

        {/* ?Fruit Desc */}
        <Route
          path="/fruits/:id"
          element={
            <EachFruit
              setFruitArr={setFruitArr}
              setCartOpen={setCartOpen}
              fruitObj={obj1}
              fruitArr={fruitArr}
              addToCartHandler={addToCartHandler}

              setObj1={setObj1}
              savedArr={savedArr}
              setSavedArr={setSavedArr}
            />
          }
        />
        {/* ? Vebetable Desc */}
        <Route
          path="/vegetables/:id"
          element={
            <EachVegetable
              setFruitArr={setFruitArr}
              setCartOpen={setCartOpen}
              fruitObj={obj1}
              fruitArr={fruitArr}
              addToCartHandler={addToCartHandler}

              setObj1={setObj1}
              savedArr={savedArr}
              setSavedArr={setSavedArr}
            />
          }
        />

        {/* ? Banana Desc */}
        <Route
          path="/bananas/:id"
          element={
            <EachBanana
              setFruitArr={setFruitArr}
              setCartOpen={setCartOpen}
              fruitObj={obj1}
              fruitArr={fruitArr}
              addToCartHandler={addToCartHandler}

              setObj1={setObj1}
              savedArr={savedArr}
              setSavedArr={setSavedArr}
            />
          }
        />

        {/* ? Butter Desc */}
        <Route
          path="/butters/:id"
          element={
            <EachButter
              setFruitArr={setFruitArr}
              setCartOpen={setCartOpen}
              fruitObj={obj1}
              fruitArr={fruitArr}
              addToCartHandler={addToCartHandler}

              setObj1={setObj1}
              savedArr={savedArr}
              setSavedArr={setSavedArr}
            />
          }
        />

        {/* ? Trees Desc */}
        <Route
          path="/trees/:id"
          element={
            <EachTree
              setFruitArr={setFruitArr}
              setCartOpen={setCartOpen}
              fruitObj={obj1}
              fruitArr={fruitArr}
              addToCartHandler={addToCartHandler}

              setObj1={setObj1}
              savedArr={savedArr}
              setSavedArr={setSavedArr}
            />
          }
        />

        {/* ? Trees Desc */}
        <Route
          path="/nuts/:id"
          element={
            <EachNut
              setFruitArr={setFruitArr}
              setCartOpen={setCartOpen}
              fruitObj={obj1}
              fruitArr={fruitArr}
              addToCartHandler={addToCartHandler}

              setObj1={setObj1}
              savedArr={savedArr}
              setSavedArr={setSavedArr}
            />
          }
        />
      </Routes>

      <MyCartFixed
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        fruitArr={fruitArr}
        setFruitArr={setFruitArr}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
        arrFr={arrFr}
        setArrFr={setArrFr}
      />

      <SavedFixed
        savedOpen={savedOpen}
        setSavedOpen={setSavedOpen}
        savedArr={savedArr}
        setSavedArr={setSavedArr}
        setFruitArr={setFruitArr}
        fruitArr={fruitArr}
        setCartOpen={setCartOpen}
        fruitObj={obj1}
        setObj1={setObj1}
      />

      <QuickView
        quickOpen={quickOpen}
        setQuickeOpen={setQuickeOpen}
        fruitArr={fruitArr}
        setFruitArr={setFruitArr}
        quikArr={quikArr}
        setCartOpen={setCartOpen}
        setBrowsShow={setBrowsShow}
      />

      <CompareFixed compareOpen={compareOpen} setCompareOpen={setCompareOpen} />
      <LeftBottomFixed demoUse={demoUse} />
      <RightBottomFixed
        setDemoUse={setDemoUse}
        demoUse={demoUse}
        setQuickeOpen={setQuickeOpen}
      />
      <BackDrop
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        savedOpen={savedOpen}
        setSavedOpen={setSavedOpen}
        quickOpen={quickOpen}
        setQuickeOpen={setQuickeOpen}
        compareOpen={compareOpen}
        setCompareOpen={setCompareOpen}
      />
      <Footer />
    </div>
  );
}

export default App;
