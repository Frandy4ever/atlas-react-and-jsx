import { useEffect, useState } from "react";
import morningImage from "../assets/morning.svg";
import afternoonImage from "../assets/afternoon.svg";
import eveningImage from "../assets/eveningly.svg";
import nightImage from "../assets/nighty.svg";

export default function Greeting() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [greeting, setGreeting] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    function getTimeOfDayDetails(time) {
      return time >= 6 && time < 12
        ? { greeting: "Good Morning", imageSrc: morningImage }
        : time >= 12 && time < 17
        ? { greeting: "Good Afternoon", imageSrc: afternoonImage }
        : time >= 17 && time < 21
        ? { greeting: "Good Evening", imageSrc: eveningImage }
        : { greeting: "Good Night", imageSrc: nightImage };
    }

    const { greeting, imageSrc } = getTimeOfDayDetails(currentTime.getHours());
    setGreeting(greeting);
    setImage(imageSrc);

    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return clearInterval(intervalId);
  }, [currentTime]);

  return (
    <h1 className="greeting">
      {image && <img src={image} alt={`${greeting} image`} />}
      {greeting}!
    </h1>
  );
}
