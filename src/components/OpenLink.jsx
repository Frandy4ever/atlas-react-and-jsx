import openImage from "../assets/open.svg";

export default function OpenLink({ link }) {
  return (
    <>
        <a href={link} target="_blank" rel="noopener noreferrer">
           <img src={openImage} alt="Open Link" />
      </a>
    </>
  );
}
