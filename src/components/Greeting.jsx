import { useEffect, useState } from "react";
import dayImage from "../assets/day.svg";
import eveningImage from "../assets/evening.svg";
import nightImage from "../assets/night.svg";

function Greeting() {
  const [greeting, setGreeting] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const time = new Date().getHours();

    if (time >= 6 && time < 12) {
      setGreeting("Good Morning!");
      setImage(dayImage);
    } else if (time >= 12 && time < 17) {
      setGreeting("Good Afternoon!");
      setImage(dayImage);
    } else if (time >= 17 && time < 21) {
      setGreeting("Good Evening!");
      setImage(eveningImage);
    } else {
      setGreeting("Good Night!");
      setImage(nightImage);
    }
  }, []);

  return (
    <>
      <h1 className="greeting">
        {image && <img src={image} alt={greeting} />}
        {greeting}
      </h1>
    </>
  );
}

export default Greeting;
