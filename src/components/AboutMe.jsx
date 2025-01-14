import { useState } from "react";
import profilePic from "../assets/images/profilePic.jpg";

export default function AboutMe() {
  const [imageSrc, setImageSrc] = useState(profilePic);
  const [name, setName] = useState("Frandy Slueue");
  const [spec, setSpec] = useState("Software Engineer");
  const [trimester, setTrimester] = useState("fifth trimester ");
  const [favoriteTech, setFavoriteTech] = useState(
    "Python, JavaScript, and ReactJS"
  );
  const [careerGoals, setCareerGoals] = useState("Full Stack Developer");
  const [codeSite, setCodeSite] = useState("https://leetcode.com/");
  const [hobbies, setHobbies] = useState(
    "video games, diving into a good book, or enjoying a board game with friends"
  );

  return (
    <div className="about-me">
      <a
        href="https://www.linkedin.com/in/frandyslueuewebdevitpro/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          className="about-me-image"
          src={imageSrc}
          alt="Professional Picture"
          title="Click to see my LinkedIn Profile"
        />
      </a>

      <p>
        Hi, I'm {name}, a {spec} student in my {trimester}
        at Atlas School, and I'm excited about the world of software
        development! I'm passionate about building with {favoriteTech}, and I'm
        looking forward to launching my career as a {careerGoals} upon
        graduation. When I'm not coding, you can find me playing {hobbies}. I
        also love challenging myself with coding puzzles on{" "}
        <a href={codeSite} target="_blank">
          LeetCode
        </a>
        .
      </p>
    </div>
  );
}
