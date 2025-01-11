import links from "../assets/links.json";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.uel} target="_blank" rel="noopener noreferrer">
              {" "}
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <p> &copy; {currentYear} Atlas School</p>
    </footer>
  );
}
