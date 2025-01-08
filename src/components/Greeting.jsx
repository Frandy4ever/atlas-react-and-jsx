import { useEffect, useState } from "react";
import "../index.css";

function Greeting() {
  const [greeting, setGreeting] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const time = new Date().getHours();

    if (time >= 6 && time <= 11.59) {
      setGreeting("Good Morning!");
      setImage("src/assets/day.svg");
    } else if (time >= 12 && time <= 16.59) {
      setGreeting("Good Afternoon!");
      setImage("src/assets/day.svg");
    } else if (time >= 17 && time <= 20.59) {
      setGreeting("Good Evening!");
      setImage("src/assets/evening.svg");
    } else {
      setGreeting("Good Night!");
      setImage("src/assets/night.svg");
    }
  }, []);

  return (
    <>
      <h1>
        {image && <img src={image} alt={greeting} />}
        {greeting}
      </h1>
    </>
  );
}

export default Greeting;
