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
          aria-label="LinkedIn Profile"
        >
          <img src={linkedInIcon} alt="LinkedIn logo" />
        </a>
        <a
          href="https://github.com/Frandy4ever/atlas-react-and-jsx/tree/main/src"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github Profile"
        >
          <img src={githubIcon} alt="Github logo" />
        </a>
      </div>
    </>
  );
}
