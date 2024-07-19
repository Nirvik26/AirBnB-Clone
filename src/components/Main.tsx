import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Menubar from "./Menubar";
import Home from "./Home";
import moment from "moment";

function Main() {

  const [hotels, setHotels] = useState([]);
  const [currency, setCurrency] = useState("");
  const [place, setPlace] = useState("");
  const [date, setDate] = useState("");
  const [guest, setGuest] = useState("");
  const [menu, setMenu] = useState("");

  const today = new Date();
  let tomorrow = new Date();

  tomorrow.setDate(today.getDate() + 1);

  const getHotels = async () => {
    const url =
      `https://airbnb13.p.rapidapi.com/search-geo?ne_lat=52.51&ne_lng=13.41&sw_lat=52.41&sw_lng=13.31&search-location?location=${place ? place : "Germany"}&checkin=${date ? date : moment(tomorrow).format("YYYY-MM-DD")}&checkout=${date ? date : moment(tomorrow).format("YYYY-MM-DD")}&adults=${guest ? guest : "1"}&children=0&infants=0&pets=0&page=1&currency=${currency ?? "USD"}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "c5e7e3a9c6msh6d0ba8d38b217cbp1ff6c7jsnb5a4ef3ca6a0",
        "x-rapidapi-host": "airbnb13.p.rapidapi.com",
      },
    };
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setHotels(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getHotels();
  }, [currency,guest,place,date]);

  return (
    <div>
      <Navbar setCurrency={setCurrency} setGuest={setGuest} setPlace={setPlace} setDate={setDate} />
      <Menubar setMenu={setMenu}/>
      <Home menu={menu} hotels={hotels} currency={currency}/>
    </div>
  );
}

export default Main;
