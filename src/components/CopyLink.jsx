import copyImage from "../assets/copy.svg";

export default function CopyLink({ link }) {
  const handleCopy = () => {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        alert("Link copied to clipboard!");
      })
      .catch(() => {
        alert("Failed to copy the link.");
      });
  };

  return (
    <img
      className="copy"
      src={copyImage}
      alt="Copy Link"
      onClick={handleCopy}
    />
  );
}
