import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import FOOD from "../data/FOOD";
import TRAVEL from "../data/TRAVEL";
import HOME from "../data/HOME";
import OTHER from "../data/OTHER";
import "../App.css";

function Result() {
  const [display, setDisplay] = useState("none");
  const [matter, setMatter] = useState("");
  const [image, setImage] = useState(null);
  const location = useLocation();
  const total = location.state.total.toFixed(2) - 2;
  const food = location.state.totalfood.toFixed(2) - 0.5;
  const travel = location.state.totaltravel.toFixed(2) - 0.5;
  const home = location.state.totalhome.toFixed(2) - 0.5;
  const other = location.state.totalother.toFixed(2) - 0.5;

  const foodp = ((food / total) * 100).toFixed(2);
  const travelp = ((travel / total) * 100).toFixed(2);
  const homep = ((home / total) * 100).toFixed(2);
  const otherp = ((other / total) * 100).toFixed(2);
  console.log(total, food, travel, home, other);

  const closePopup = () => {
    setDisplay("none");
  };

  const openPopup = (e) => {
    if (e === "food") {
      if (foodp < 25) setMatter(FOOD.a);
      else if (foodp >= 25 && foodp < 50) setMatter(FOOD.b);
      else if (foodp >= 50 && foodp < 75) setMatter(FOOD.c);
      else if (foodp >= 75 && foodp < 100) setMatter(FOOD.d);
      setImage(
        "https://i.pinimg.com/564x/55/3e/d4/553ed485c523f4736bb754a366f1e6ff.jpg"
      );
    } else if (e === "travel") {
      if (travelp < 25) setMatter(TRAVEL.a);
      else if (travelp >= 25 && travelp < 50) setMatter(TRAVEL.b);
      else if (travelp >= 50 && travelp < 75) setMatter(TRAVEL.c);
      else if (travelp >= 75 && travelp < 100) setMatter(TRAVEL.d);
      setImage(
        "https://i.pinimg.com/564x/e6/7a/83/e67a83822560722e43cb12222ab80e4b.jpg"
      );
    } else if (e === "home") {
      if (homep < 25) setMatter(HOME.a);
      else if (homep >= 25 && homep < 50) setMatter(HOME.b);
      else if (homep >= 50 && homep < 75) setMatter(HOME.c);
      else if (homep >= 75 && homep < 100) setMatter(HOME.d);
      setImage("https://footprint.wwf.org.uk/img/technology.8bb44bd2.jpg");
    } else if (e === "other") {
      if (otherp < 25) setMatter(OTHER.a);
      else if (otherp >= 25 && otherp < 50) setMatter(OTHER.b);
      else if (otherp >= 50 && otherp < 75) setMatter(OTHER.c);
      else if (otherp >= 75 && otherp < 100) setMatter(OTHER.d);
      setImage(
        "https://i.pinimg.com/474x/df/3a/20/df3a200a4e698dc920e777aed5f48221.jpg"
      );
    }
    setDisplay("block");
  };

  return (
    <Container>
      <Container1>
        <div className="top">
          <h2>CONGRATULATIONS!</h2>
          <p>
            Your annual footprint is close to the UK average but there's still
            room to improve your score!
          </p>
        </div>

        {/* <img src='https://footprint.wwf.org.uk/img/foot.58137a28.svg' alt="My Image" /> */}
        <div className="bg">
          <h1 className="footprint">YOUR FOOTPRINT IS EQUAL TO</h1>
          <h1 className="value">{total}</h1>
          <h1 className="tonnes">TONNES*</h1>
        </div>
      </Container1>
      <Container2>
        <img
          src="https://footprint.wwf.org.uk/img/globe-europe.dfc3b352.svg"
          alt="My Image"
        />
        <div className="world">
          <h1 className="footprint">World average</h1>
          <h1 className="value">6.3</h1>
          <h1 className="tonnes">TONNES*</h1>
        </div>
      </Container2>
      <Container3>
        <div className="box bg-warning d-flex">
          <div className="d-flex flex-column my-4 mx-4">
            <div>
              <img
                className="img-fluid"
                src="https://footprint.wwf.org.uk/img/food.fe2c757b.svg"
              ></img>
            </div>
            <h5 className="mb-0 mt-2 text-center text-light fw-bold">
              {foodp + "%"}
            </h5>
          </div>
          <div className="right ms-4 mt-4">
            <h1 className="text-light">Food</h1>
            <button className="button" onClick={() => openPopup("food")}>
              Reduce the score
            </button>
          </div>
        </div>
        <div className="box bg-primary d-flex">
          <div className="d-flex flex-column my-4 mx-4">
            <div>
              <img
                className="img-fluid"
                src="https://footprint.wwf.org.uk/img/travel.377f26fb.svg"
              ></img>
            </div>
            <h5 className="mb-0 mt-2 text-center text-light fw-bold">
              {travelp + "%"}
            </h5>
          </div>
          <div className="right ms-4 mt-4">
            <h1 className="text-light">Travel</h1>
            <button className="button" onClick={() => openPopup("travel")}>
              Reduce the score
            </button>
          </div>
        </div>
        <div className="box bg-info d-flex">
          <div className="d-flex flex-column my-4 mx-4">
            <div>
              <img
                className="img-fluid"
                src="https://footprint.wwf.org.uk/img/home.5fa6c3b9.svg"
              ></img>
            </div>
            <h5 className="mb-0 mt-2 text-center text-light fw-bold">
              {homep + "%"}
            </h5>
          </div>
          <div className="right ms-4 mt-4">
            <h1 className="text-light">Home</h1>
            <button className="button" onClick={() => openPopup("home")}>
              Reduce the score
            </button>
          </div>
        </div>
        <div className="box bg-danger d-flex">
          <div className="d-flex flex-column my-4 mx-4">
            <div>
              <img
                className="img-fluid"
                src="https://footprint.wwf.org.uk/img/stuff.f8400931.svg"
              ></img>
            </div>
            <h5 className="mb-0 mt-2 text-center text-light fw-bold">
              {otherp + "%"}
            </h5>
          </div>
          <div className="right ms-4 mt-4">
            <h1 className="text-light">Other</h1>
            <button className="button" onClick={() => openPopup("other")}>
              Reduce the score
            </button>
          </div>
        </div>
      </Container3>
      <div id="popup" className="popup-container" style={{ display: display }}>
        <div className="close-button text-light fw-bolder fs-4" onClick={closePopup}>
          X 
        </div>
        <div className="d-flex ">
          <div className="w-50 ">
            <img
              className=""
              width="100%"
              height="100%"
              src={image}
              alt="no-image"
            />
          </div>
          <div className="w-50 text-light mt-4 px-3 ">
            <p className="fs-4">{matter}</p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Result;

const Container1 = styled.div`
  height: 650px;
  width: 33%;
  background-color: #ffbf1e;

  border-radius: 10px;
  ${"" /* margin-left: 120px; */}
  margin-top: 60px;
  margin-bottom: 20px;
  z-index: -2;

  h2 {
    font-size: 30px;
    position: relative;
    padding-top: 30px;
    padding-left: 20px;
    font-weight: bold;
    z-index: 2;
  }
  p {
    padding-left: 20px;
    padding-right: 20px;
    line-height: 21px;
  }
  .footprint {
    font-size: 20px;
    position: relative;
    padding-top: 30px;
    text-align: center;
    font-weight: bold;
    ${"" /* width:50%; */}
    ${
      "" /* white-space: nowrap;
    overflow:hidden; */
    }
  }
  .value {
    font-size: 50px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 0;
    z-index: 2;
  }
  .tonnes {
    font-size: 50px;
    text-align: center;
    font-weight: bold;
    margin-top: 0;
  }

  .bg {
    background-image: url("https://footprint.wwf.org.uk/img/foot.58137a28.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: center;
    height: 80%;
  }
  .top {
    height: 20%;
  }
`;

const Container2 = styled.div`
  height: 650px;
  width: 33%;
  background-color: black;
  border-radius: 10px;
  ${"" /* margin-left: 120px; */}
  margin-top: 60px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  img {
    position: relative;
    margin-bottom: 0px;
    margin-top: auto;
    height: 200px;
  }

  .footprint {
    font-size: 30px;
    position: relative;
    padding-top: 30px;
    text-align: center;
    font-weight: bold;
    ${"" /* width:50%; */}
    ${
      "" /* white-space: nowrap;
    overflow:hidden; */
    }
    color:#FFBF1E;
  }
  .value {
    font-size: 50px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 0;
    z-index: 2;
    color: white;
  }
  .tonnes {
    font-size: 50px;
    text-align: center;
    font-weight: bold;
    margin-top: 0;
    color: white;
  }

  .world {
    margin-bottom: auto;
    margin-top: 0;
  }
`;

const Container3 = styled.div`
  height: 650px;
  width: 33%;
  background-color: black;
  border-radius: 10px;
  margin-top: 60px;
  margin-bottom: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;

  .box {
    flex: 1;
    height: 20px;

    img {
      ${
        "" /* margin-left:40px;
    margin-top:auto;
    margin-bottom:auto; */
      }
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
