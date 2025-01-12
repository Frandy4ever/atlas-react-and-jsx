import linkedInIcon from "../assets/linkedin.svg";
import githubIcon from "../assets/github.svg";

export default function SocialLinks() {
  return (
    <>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/frandyslueuewebdevitpro/"
          target="_blank"
          rel="noopener noreferrer"
          >
          <img src={linkedInIcon} alt="" />
        </a>
        <a
          href="https://github.com/Frandy4ever/atlas-react-and-jsx/tree/main/src"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubIcon} alt="" />
        </a>
      </div>
    </>
  );
}
